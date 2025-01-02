'use strict';

/**
 * cart-checkout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cart-checkout.cart-checkout');
