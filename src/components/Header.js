import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0b0b0b;
  height: 75px;
  display: flex;
`;

const Header = props => {
  return (
    <StyledHeader>
      <Navigation
        rockets={props.rockets}
        handleRocketSelect={props.handleRocketSelect}
        handleSearchLaunches={props.handleSearchLaunches}
        handleSuccesfulLaunches={props.handleSuccesfulLaunches}
      />
    </StyledHeader>
  );
};

export default Header;
