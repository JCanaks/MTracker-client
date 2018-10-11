import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ token, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (token) return <Component {...props} />;
      return <Redirect to="/login" />;
    }}
  />
);

export const mapStateToProps = (state) => {
  const { token } = state.auth;
  return {
    token,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
