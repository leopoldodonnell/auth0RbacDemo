const { version } = require('../../package.json')

export default {
  version: process.env.APP_VERSION || version,
  port: process.env.APP_PORT || 3000,
  host: process.env.APP_HOST || '0.0.0.0',
};
