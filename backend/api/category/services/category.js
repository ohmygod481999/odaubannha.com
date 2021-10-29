"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params, populate) {
    const tempPopulate = ["products", "products.regions", "products.image"];
    if (populate) {
      tempPopulate = [...tempPopulate, ...populate];
    }
    return strapi.query("category").find(params, tempPopulate);
  },
};
