import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0B0B0B;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
