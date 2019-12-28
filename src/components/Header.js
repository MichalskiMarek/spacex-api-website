import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0b0b0b;
  height: 75px;
  display: flex;
`;

const Header = ({
  rockets,
  handleRocketSelect,
  handleSearchLaunches,
  handleSuccesfulLaunches,
  isOpen,
  setIsOpen
}) => {
  return (
    <StyledHeader>
      <Navigation
        rockets={rockets}
        handleRocketSelect={handleRocketSelect}
        handleSearchLaunches={handleSearchLaunches}
        handleSuccesfulLaunches={handleSuccesfulLaunches}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </StyledHeader>
  );
};

export default Header;
