module.exports = function ({ config }) {
  const instance = {};

  instance.getInfo = async () => {
    const result = {};

    result.data = {
      message: 'APIs',
      version: config.version,
      env: config.server.name,
    };

    return result;
  };

  return instance;
};
