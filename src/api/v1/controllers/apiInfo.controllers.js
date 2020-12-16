import { catchAsync } from '../helpers/async.helpers';
import { handleError } from '../helpers/error.helpers';
import { apiStatus } from '../helpers/response.helpers';

module.exports = function ({ config, apiServicesV1 }) {
  const instance = {};

  const services = apiServicesV1.apiInfoServices;

  instance.getInfo = catchAsync(async (req, res) => {
    const getInfoResult = await services.getInfo();

    if (getInfoResult.err) {
      handleError(getInfoResult.err, req, res);
      return;
    }

    apiStatus(req, res, getInfoResult.data);
  });

  return instance;
};
