'use strict';

/**
 * news-singe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-singe.news-singe');
