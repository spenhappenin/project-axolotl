import { useState, useContext, useEffect, } from 'react';
import { AuthContext, } from "../providers/AuthProvider";

const FetchUser = ({ children, }) => {
  const [loaded, setLoaded] = useState(false);
  const { validateToken, authenticated, } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) {
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
