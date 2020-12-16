import apiInfo from './apiInfo.routes';

export default ({ router, apiMiddlewareV1, apiControllersV1 }) => {
  const api = router();

  api.use('/', apiInfo({ router, apiMiddlewareV1, apiControllersV1 }));

  return api;
};
