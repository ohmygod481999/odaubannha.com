"use strict";
const { parseMultipartData } = require("strapi-utils");
const { sanitizeEntity } = require("strapi-utils");

/**
 * order-management.js controller
 *
 * @description: A set of functions called "actions" of the `order-management` plugin.
 */

module.exports = {
  /**
   * Default action.
   *
   * @return {Object}
   */

  find: async (ctx) => {
    let entities;

    let service = strapi.plugins["order-management"].services;
    const query = { ...ctx.query };
    let page = 1;
    let pageSize = 10;
    if (query.page && query.pageSize) {
      // _start
      // _limit
      page = parseInt(query.page);
      pageSize = parseInt(query.pageSize);
      query._start = (page - 1) * pageSize;
      query._limit = pageSize;
      delete query.page;
      delete query.pageSize;
    }
    if (query._q) {
      entities = await service["order"].search(query);
    } else {
      entities = await service["order"].find(query);
    }
    const totalCount = await service["order"].count(query);

    return {
      data: {
        results: entities.map((entity) =>
          sanitizeEntity(entity, {
            model: strapi.plugins["order-management"].models.order,
          })
        ),
        pagination: {
          page: page,
          pageCount: Math.floor(totalCount / pageSize),
          pageSize: pageSize,
          total: totalCount,
        },
      },
    };
  },
  findToppings: async (ctx) => {
    let entities;

    let service = strapi.plugins["order-management"].services;
    if (ctx.query._q) {
      entities = await service["topping"].search(ctx.query);
    } else {
      entities = await service["topping"].find(ctx.query);
    }

    return {
      data: {
        results: entities,
        pagination: {},
      },
    };
    // return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order}))
  },
  findOne: async (ctx) => {
    let service = strapi.plugins["order-management"].services;
    let order = await service["order"].findOne(ctx.query);

    return {
      data: order,
    };
    // return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order}))
  },
  create: async (ctx) => {
    let entity;
    let service = strapi.plugins["order-management"].services;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await service["order"].create(data, { files });
    } else {
      entity = await service["order"].create(ctx.request.body);
    }

    if (entity) {
      await strapi.plugins["email"].services.email.send({
        to: process.env.ADMIN_EMAIL,
        subject: "Có một đơn hàng mới!",
        text: "Có một đơn hàng mới!",
        html: "Có một đơn hàng mới!",
      });
    }
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;

    let service = strapi.plugins["order-management"].services;
    let entity = await service["order"].update(
      { id },
      ctx.request.body
    );

    return sanitizeEntity(entity, {
      model: strapi.plugins["order-management"].models.order,
    });
  },
};
