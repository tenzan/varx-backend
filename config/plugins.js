module.exports = ({ env }) => ({
  upload: {
    provider: "wasabi",
    providerOptions: {
      region: env("WASABI_REGION"),
      bucket: env("WASABI_BUCKET"),
      secret: env("WASABI_SECRET"),
      key: env("WASABI_KEY"),
    },
  },
});
