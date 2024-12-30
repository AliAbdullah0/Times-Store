'use strict';

/**
 * canceled router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::canceled.canceled');
