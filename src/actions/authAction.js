import types from './actionTypes';
import axiosInstance from '../services/requestHandler';

const signup = user => ({
  type: types.SIGN_UP,
  payload: axiosInstance().post('/signup',user)
});

const login = user => ({
  type: types.LOGIN,
  payload: axiosInstance().post('/login',user)
});

const logout = () => ({
  type: types.LOGOUT,
});

export default  {
  signup,
  logout,
  login
};