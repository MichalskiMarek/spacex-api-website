import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Form from "./Form";

const StyledNav = styled.nav`
  background-color: #0b0b0b;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Logo />
      <Form />
    </StyledNav>
  );
};

export default Navigation;
