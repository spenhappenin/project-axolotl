import React, { useState, } from 'react';
import axios from "../utils/webRequests";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children, }) => {
  const [user, setUser] = useState({ name: "Spanky" });
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const registration = () => {
  };

  const authenticate = ({ email, password, }, push) => {
    setLoading(true);
    axios.post("/api/authenticate", { email, password, })
      .then( res => {
        setLoading(false);
        setUser(res.data);
        push("/");
      })
      .catch( err => {
        debugger
      })
  };

  const logout = () => {
  };

  const validateToken = () => {
  };

  return (
    <AuthContext.Provider value={{
      user,
      authenticated,
      loading,
      registration,
      authenticate,
      logout,
      validateToken,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
