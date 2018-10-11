import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const GuestRoute = ({
  token, role, component: Component, ...rest
}) => {
 return( <Route
    {...rest}
    render={
      props => (
        !token ? <Component {...props} />
          : <Redirect to={role=='Admin' ? '/requests/admin':'/requests/user' } />
      )}
  />)
      };
export const mapStateToProps = (state) => {
  const { token, role } = state.auth;
  return {
    token,
    role
  };
};
export default connect(mapStateToProps)(GuestRoute);
