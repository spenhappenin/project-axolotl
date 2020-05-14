import React from 'react';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <div>Register</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
