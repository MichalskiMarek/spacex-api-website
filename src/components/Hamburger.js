import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 0;

  @media (min-width: 852px) {
    visibility: hidden;
    position: absolute;
  }
`;

const StyledBox = styled.span`
  width: 40px;
  height: 24px;
  position: relative;
  display: inline-block;
`;

const StyledInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "#ffffff")};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &::before {
    top: -10px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(10px) rotate(45deg)" : ""};
  }
  &::after {
    top: 10px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-10px) rotate(-45deg)" : ""};
  }
`;

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <StyledButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StyledBox>
        <StyledInner isOpen={isOpen}> </StyledInner>
      </StyledBox>
    </StyledButton>
  );
};
export default Hamburger;
