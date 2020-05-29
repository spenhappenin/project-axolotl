import React, { useContext, } from 'react';

import AppNavbar from './AppNavbar';
import WebNavbar from './WebNavbar';
import { AuthContext, } from '../../providers/AuthProvider';

const NavbarContainer = () => {
  const { authenticated, } = useContext(AuthContext);

  if (authenticated)
    return <AppNavbar />;
  else
    return <WebNavbar />;
};

export default NavbarContainer
