import types from './actionTypes';
import axiosInstance from '../services/requestHandler';

const signup = user => ({
  type: types.SIGN_UP,
  payload: axiosInstance().post('/signup',user)
});

const logout = () => ({
  type: types.LOGOUT,
});

export default {
  signup,
  logout
};