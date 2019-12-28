import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Form from "./Form";
import Hamburger from "./Hamburger";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0b0b0b;
  padding: 15px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
`;

const Navigation = ({
  rockets,
  handleRocketSelect,
  handleSearchLaunches,
  handleSuccesfulLaunches,
  isOpen,
  setIsOpen
}) => {
  return (
    <StyledNav>
      <Logo />
      <Form
        rockets={rockets}
        handleRocketSelect={handleRocketSelect}
        handleSearchLaunches={handleSearchLaunches}
        handleSuccesfulLaunches={handleSuccesfulLaunches}
        isOpen={isOpen}
      />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledNav>
  );
};

export default Navigation;
