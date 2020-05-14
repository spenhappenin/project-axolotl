import React, { useContext, useState, } from "react";
import { useHistory, } from "react-router-dom";

import { AuthContext, } from "../providers/AuthProvider";

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='email' onChange={(e) => setEmail(e.target.value) } />
        <br />
        <br />
        <label>Password</label>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
