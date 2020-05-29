import React, { useContext, } from 'react';

import { Route, } from 'react-router-dom';

import NotFound from './NotFound';
import { AuthContext, } from "../providers/AuthProvider";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated, } = useContext(AuthContext);

  return (
    <Route
      { ...rest }
      render={ props => (
        authenticated ?
          <Component {...props} />
        :
          <NotFound />
      )}
    />
  );
};

export default ProtectedRoute;
