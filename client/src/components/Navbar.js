import React, { useContext, } from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import { useHistory, } from "react-router-dom";

import { AuthContext, } from '../providers/AuthProvider';

const Navbar = () => {
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
        <Link to="/">
          <Menu.Item name="home">
            HOME
          </Menu.Item>
        </Link>
        <Link to="/pricing">
          <Menu.Item name="pricing">
            PRICING
          </Menu.Item>
        </Link>
        {
          authenticated ?
          <>
            <Menu.Item name="logout" onClick={() => logout(history.push)}>
              LOGOUT
            </Menu.Item>
          </>
          :
          <>
            <Link to="/trial">
              <Menu.Item name="trial">
                TRIAL
              </Menu.Item>
            </Link>
            <Link to="/login">
              <Menu.Item name="login" as={NavButton}>
                LOGIN
              </Menu.Item>
            </Link>
          </>
        }
      </Menu.Menu>
    </Menu>
  );
};

const NavButton = styled.button`

`;

export default Navbar;
