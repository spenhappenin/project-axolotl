import React, { useContext, } from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import { useHistory, } from "react-router-dom";

import { AuthContext, } from '../../providers/AuthProvider';

const Navbar = () => {
  const { authenticated, logout, } = useContext(AuthContext);
  const history = useHistory();

  return (
    <Menu>
      <Link to="/">
        <LogoTab name="home">
          <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAzf6Vt-WUzEecYB8KJptY8ntVIqp17mu4pg&usqp=CAU" />
          IGNITE
        </LogoTab>
      </Link>

      <Menu.Menu position="right">
        {
          authenticated ?
            <>
              <Link to="/applications">
                <Menu.Item name="applications">
                  Applications
                </Menu.Item>
              </Link>
              <Link to="/companies">
                <Menu.Item name="companies">
                  Companies
                </Menu.Item>
              </Link>
              <Menu.Item name="logout" onClick={() => logout(history.push)}>
                LOGOUT
              </Menu.Item>
            </>
          :
            <>
              <Link to="/login">
                <Menu.Item name="login">
                  Login
                </Menu.Item>
              </Link>
              <Link to="/register">
                <Menu.Item name="register">
                  Register
                </Menu.Item>
              </Link>
            </>
        }

      </Menu.Menu>
    </Menu>
  );
};

const LogoTab = styled(Menu.Item)`
`;

const Logo = styled.img`
  width: 300px;
`;

export default Navbar;
