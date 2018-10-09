import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const GuestRoute = ({
  token, role, component: Component, ...rest
}) => (
  <Route
    {...rest}
    render={
      props => (
        !token ? <Component {...props} />
          : <Redirect to={role=='Admin' ? '/requests/admin':'/requests/user' } />
      )}
  />
);
export const mapStateToProps = (state) => {
  const { token } = state.auth;
  return {
    token,
  };
};
export default connect(mapStateToProps)(GuestRoute);
