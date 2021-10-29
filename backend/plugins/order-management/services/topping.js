const { isDraft } = require('strapi-utils').contentTypes;

module.exports = {
  async find(params, populate) {
    const result = await strapi.query("topping", "order-management").find(params, populate);
    return result
  },
  findOne(params, populate) {
    return strapi.query("topping", "order-management").findOne(params, populate);
  },
  async search(params) {
    const result = await strapi.query("topping", "order-management").search(params);
    return result
  },
  async create(data, { files } = {}) {
    // const isDraft = isDraft(data, strapi.plugins["order-management"].models.order);
    const validData = await strapi.entityValidator.validateEntityCreation(
      strapi.plugins["order-management"].models.order,
      data,
      // { isDraft }
    );

    const entry = await strapi.query("topping", "order-management").create(validData);

    if (files) {
      // automatically uploads the files based on the entry and the model
      await strapi.entityService.uploadFiles(entry, files, {
        model: 'topping',
        source: 'order-management'
        // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
      });
      return this.findOne({ id: entry.id });
    }

    return entry;
  },
};