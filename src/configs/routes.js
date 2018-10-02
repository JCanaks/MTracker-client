import { Route } from 'react-router-dom';
import Home from '../views/Home';
import Signup from '../views/Signup';
import Login from '../views/Login';
import NotFound from '../views/NotFound';
import UserRequest from '../views/UserRequest';
import AdminRequest from '../views/AdminRequest';

export default [
  {
    type: Route,
    path: '/',
    component: Home,
    exact: true,
  },
  {
    type: Route,
    path: '/signup',
    component: Signup,
    exact: true,
  },
  {
    type: Route,
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    type: Route,
    path: '/requests/user',
    component: UserRequest,
    exact: true,
  },
  {
    type: Route,
    path: '/requests/admin',
    component: AdminRequest,
    exact: true,
  },
  {
    type: Route,
    path: '*',
    component: NotFound,
    exact: true,
  },
];