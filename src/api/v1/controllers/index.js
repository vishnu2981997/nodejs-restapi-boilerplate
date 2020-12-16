const apiInfoControllers = require('./apiInfo.controllers');

module.exports = function ({ config, apiServicesV1 }) {
  const instance = {};

  instance.apiInfoControllers = apiInfoControllers({
    config,
    apiServicesV1,
  });

  return instance;
};
