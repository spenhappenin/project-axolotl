import React, { useContext, } from 'react';

import { Container, } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import FetchUser from './components/FetchUser';
import { AuthContext, } from './providers/AuthProvider';

const App = () => {
  const { authenticated, } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <FetchUser>
            <Switch>
              <Route exact path="/">
              <div>{authenticated && 'logged in'}</div>
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/trial">
                <Registration />
              </Route>
              <Route>
                <div>404</div>
              </Route>
            </Switch>
          </FetchUser>
        </Container>
      </Router>
    </>
  );
}

export default App;
