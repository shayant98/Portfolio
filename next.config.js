const nextTranslate = require("next-translate");
module.exports = nextTranslate({
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    ...nextTranslate,
  },
});
