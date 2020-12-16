const getUserName = () => (req, res, next) => {
  req.username = req.get('username') ? req.get('username') : undefined;
  next();
};

const getServiceName = () => (req, res, next) => {
  req.service = req.get('application-name') ? req.get('application-name') : 'unknown';
  next();
};

const formatAccessToken = () => (req, res, next) => {
  req.token =
    req.get('authorization') && req.get('authorization').split(' ').length > 1
      ? req.get('authorization').split(' ')[1]
      : undefined;
  next();
};

module.exports = {
  getUserName,
  getServiceName,
  formatAccessToken,
};
