module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloudinary_url: env('CLOUDINARY_URL'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
