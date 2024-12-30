'use strict';

/**
 * canceled service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::canceled.canceled');
