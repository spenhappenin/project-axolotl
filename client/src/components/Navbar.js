import React from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';

const Navbar = () => (
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
    </Menu.Menu>
  </Menu>
);

const NavButton = styled.button`

`;

export default Navbar;
