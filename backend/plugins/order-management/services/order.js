const { isDraft } = require("strapi-utils").contentTypes;

module.exports = {
  async find(params, populate) {
    const result = await strapi
      .query("order", "order-management")
      .find(params, populate);
    return result;
  },
  async count(params, populate) {
    const _params = { ...params };
    delete _params._start;
    delete _params._limit;
    console.log(_params);
    const result = await strapi
      .query("order", "order-management")
      .find(_params, populate);
    return result.length;
  },
  findOne(params, populate) {
    return strapi.query("order", "order-management").findOne(params, populate);
  },
  async search(params) {
    const result = await strapi
      .query("order", "order-management")
      .search(params);
    return result;
  },
  async create(data, { files } = {}) {
    // const isDraft = isDraft(data, strapi.plugins["order-management"].models.order);
    const validData = await strapi.entityValidator.validateEntityCreation(
      strapi.plugins["order-management"].models.order,
      data
      // { isDraft }
    );

    const entry = await strapi
      .query("order", "order-management")
      .create(validData);

    if (files) {
      // automatically uploads the files based on the entry and the model
      await strapi.entityService.uploadFiles(entry, files, {
        model: "order",
        source: "order-management",
        // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
      });
      return this.findOne({ id: entry.id });
    }

    return entry;
  },
  async update(params, data, { files } = {}) {
    const validData = await strapi.entityValidator.validateEntityUpdate(
      strapi.plugins["order-management"].models.order,
      data
    );

    const entry = await strapi
      .query("order", "order-management")
      .update(params, validData);

    return entry;
  },
};
