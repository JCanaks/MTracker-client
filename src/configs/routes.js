import { Route } from 'react-router-dom';
import Home from '../views/Home';
import Signup from '../views/Signup';
import Login from '../views/Login';
import NotFound from '../views/NotFound';
import UserRequest from '../views/UserRequest';
import AdminRequest from '../views/AdminRequest';
import routePages from '../components/routes';
const { GuestRoute, PrivateRoute } = routePages;

export default [
  {
    type: Route,
    path: '/',
    component: Home,
    exact: true,
  },
  {
    type: GuestRoute,
    path: '/signup',
    component: Signup,
    exact: true,
  },
  {
    type: GuestRoute,
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    type: PrivateRoute,
    path: '/requests/user',
    component: UserRequest,
    exact: true,
  },
  {
    type: PrivateRoute,
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
