import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0b0b0b;
  height: 75px;
  display: flex;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
