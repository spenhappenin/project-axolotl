import React, { useContext, useState, } from 'react';
import { useHistory, } from 'react-router-dom';
import { Container, Form, } from 'semantic-ui-react';

import { AuthContext, } from '../providers/AuthProvider';

const Login = ({  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate, } = useContext(AuthContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate({ email, password, }, history.push);
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value) }
        />
        <Form.Input
          name="password"
          label="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Button type="submit">Login</Form.Button>
      </Form>
    </Container>
  );
};

export default Login;
