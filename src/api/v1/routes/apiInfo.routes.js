export default ({ router, apiMiddlewareV1, apiControllersV1 }) => {
  const infoApi = router();

  const controller = apiControllersV1.apiInfoControllers;

  infoApi.get('/', controller.getInfo);

  return infoApi;
};
