import React from 'react';

import { Container, } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <div>Home</div>
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
        </Container>
      </Router>
    </>
  );
}

export default App;
