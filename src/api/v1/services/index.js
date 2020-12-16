const apiInfoServices = require('./apiInfo.services');

module.exports = function ({ config }) {
  const instance = {};

  instance.apiInfoServices = apiInfoServices({ config });

  return instance;
};
