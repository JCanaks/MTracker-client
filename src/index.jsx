import React from "react";
import ReactDOM from "react-dom";
import decode from 'jwt-decode';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App";
import store from './store';
import types from './actions/actionTypes';

if (localStorage.token) {
  const decoded = decode(localStorage.token);
  const currentTime = Math.floor(Date.now() / 1000);
  if (currentTime < decoded.exp) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    store.dispatch({ type: types.PERSIST_LOGIN, payload: { token, role } });
  }
}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
