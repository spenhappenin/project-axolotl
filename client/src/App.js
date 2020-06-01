import React, { useContext, } from 'react';

import { Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';

import Home from './components/Home';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Navbar from './components/shared/Navbar';
import Registration from './components/Registration';
import FetchUser from './components/FetchUser';
import NotFound from './components/NotFound';
import AuthRoute from './components/AuthRoute';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContext, } from './providers/AuthProvider';

const App = () => {
  const { authenticated, } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Container>
        <FetchUser>
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/pricing"
              component={Pricing}
            />
            <AuthRoute
              exact
              path="/login"
              component={Login}
            />
            <AuthRoute
              exact
              path="/register"
              component={Registration}
            />
            <Route
              path="*"
              component={NotFound}
            />
          </Switch>
        </FetchUser>
      </Container>
    </>
  );
}

export default App;
