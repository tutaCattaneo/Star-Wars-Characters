import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavTitle = styled.h1`
  color: #fff;
  margin: 0;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavTitle>Star Wars Characters</NavTitle>
    </Nav>
  );
};

export default Navbar;
