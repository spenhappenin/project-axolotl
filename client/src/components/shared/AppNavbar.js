import React, { useContext, } from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import { useHistory, } from "react-router-dom";

import { AuthContext, } from '../../providers/AuthProvider';

const AppNavbar = () => {
  const { authenticated, logout, } = useContext(AuthContext);
  const history = useHistory();

  return (
    <Menu>
      <Link to="/">
        <Menu.Item name="home">
          LOGO
        </Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={() => logout(history.push)}>
          LOGOUT
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const NavButton = styled.button`

`;

export default AppNavbar;
