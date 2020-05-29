import React, { useContext, useState, } from 'react';

import { useHistory, } from "react-router-dom";
import { Container, Form, } from 'semantic-ui-react';

import { AuthContext, } from '../providers/AuthProvider';

const Registration = (props) => {
  const { registration, } = useContext(AuthContext);
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registration({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: passwordConfirmation
    }, history.push);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e, { value, }) => setFirstName(value)}
        />
        <Form.Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e, { value, }) => setLastName(value)}
        />
        <Form.Input
          label="Email"
          type="email"
          value={email}
          onChange={(e, { value, }) => setEmail(value)}
        />
        <Form.Input
          label="Password"
          type="password"
          value={password}
          onChange={(e, { value, }) => setPassword(value)}
        />
        <Form.Input
          label="Password Confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={(e, { value, }) => setPasswordConfirmation(value)}
        />
        <Form.Button type="submit">Register</Form.Button>
      </Form>
    </Container>
  );
};

export default Registration;
