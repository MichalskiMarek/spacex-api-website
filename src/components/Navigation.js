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

const Navigation = props => {
  return (
    <StyledNav>
      <Logo />
      <Form
        rockets={props.rockets}
        handleRocketSelect={props.handleRocketSelect}
        handleSearchLaunches={props.handleSearchLaunches}
        handleSuccesfulLaunches={props.handleSuccesfulLaunches}
      />
    </StyledNav>
  );
};

export default Navigation;
