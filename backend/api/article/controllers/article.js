"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.article.findOne({ id });
    entity.description = entity.description.replace(
      /\!\[.*\]\((.*)\)/g,
      (match) => {
        return match.replace(/\((.*)\)/, (match2) => {
          return `(${strapi.config.get("server.url")}${match2.slice(
            1,
            match2.length - 1
          )})`;
        });
      }
    );

    return sanitizeEntity(entity, { model: strapi.models.article });
  },
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.article.search(ctx.query);
    } else {
      entities = await strapi.services.article.find(ctx.query);
    }
    const result = entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.article })
    );
    return result.map((article) => ({
      ...article,
      description: article.description.replace(/\!\[.*\]\((.*)\)/g, (match) => {
        return match.replace(/\((.*)\)/, (match2) => {
          return `(${strapi.config.get("server.url")}${match2.slice(
            1,
            match2.length - 1
          )})`;
        });
      }),
    }));
  },
};
