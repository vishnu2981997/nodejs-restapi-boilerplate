export const apiStatus = (req, res, result = 'OK', code = 200, meta = null) => {
  const apiResult = { code: code, result: result };
  if (meta !== null) {
    apiResult.meta = meta;
  }
  res.status(code).json(apiResult);
};
