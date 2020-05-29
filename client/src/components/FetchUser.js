import { useState, useContext, useEffect, } from 'react';
import { AuthContext, } from "../providers/AuthProvider";

const FetchUser = ({ children, }) => {
  const [loaded, setLoaded] = useState(false);
  const { validateToken, user, } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setLoaded(true);
    } else {
      validateToken()
        .then(() => {
          setLoaded(true);
        })
        .catch(() => {
          setLoaded(true);
        })
    }
  }, []);

  return loaded ? children : null;

};

export default FetchUser;
