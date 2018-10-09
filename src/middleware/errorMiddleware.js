import isPromise from 'is-promise';

const errorMiddleware = () => next => (action) => {
  if (isPromise(action.payload)) {
    return next(action).catch(err => err);
  }
  // return a well structured error on failure
  if (action.type.includes('_FAILURE')) {
    const errors = {
      statusCode: 0,
      message: action.payload.message,
      response: []
    };
    if (action.payload.response) {
      const apiErrors = action.payload.response;
      errors.statusCode = apiErrors.status;
      // errors.message = apiErrors.data.errors.message;
      // if (!apiErrors.data.errors.message) {
      //   errors.response = apiErrors.data.errors;
      // }
      errors.message = apiErrors.data.details ? apiErrors.data.details:
      apiErrors.data.message;
      if (!apiErrors.data.details) {
        errors.response = apiErrors.data.message;
      }
    }
    action.payload = errors;
  }  
  return next(action);
};

export default errorMiddleware;
