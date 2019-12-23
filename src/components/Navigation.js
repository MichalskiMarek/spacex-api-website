import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Form from "./Form";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0b0b0b;
  padding: 15px;
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
