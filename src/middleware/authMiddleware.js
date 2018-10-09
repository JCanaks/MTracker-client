
import types from '../actions/actionTypes';

/**
 * authentication middleware that parses responses
 * and stores the token on success
 * @returns {Function} next
 */
const authMiddleware = () => next => (action) => {
  if (action.type === `${types.LOGIN}_SUCCESS`
    || action.type === `${types.SIGN_UP}_SUCCESS`) {
    let payloadData = action.payload.data;

    const { token } = payloadData;
    localStorage.setItem('token', token);
  }
  if (action.type === types.LOGOUT) {
    localStorage.removeItem('token');
  }
  return next(action);
};

export default authMiddleware;
