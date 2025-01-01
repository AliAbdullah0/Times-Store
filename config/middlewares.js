module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:', 'https://times-store-production.up.railway.app/api'], // Include API domain
          'img-src': ["'self'", 'data:', 'blob:', 'http:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'http:', 'https:'],
          upgradeInsecureRequests: null, 
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://zentime.vercel.app'], 
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Ensure DELETE method is included
      headers: ['Content-Type', 'Authorization'], // Include Authorization for secured APIs
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
