exports.success = (res, module, message, data = []) => {
  return res.status(200).json({
    status: 'success',
    module,
    message,
    data
  });
};

exports.error = (res, module, message, code = 500) => {
  return res.status(code).json({
    status: 'error',
    module,
    message,
    data: null
  });
};