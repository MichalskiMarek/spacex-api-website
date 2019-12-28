import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";

const StyledForm = styled.form`
  margin-right: 20px;
  display: flex;
  @media (max-width: 851px) {
    position: fixed;
    right: -20px;
    top: 70px;
    flex-direction: column;
    background-color: #0b0b0b;
    height: 100vh;
    padding: 10px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s 0.1s ease-in-out;

    &::after {
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
      content: "";
      position: absolute;
      top: 0;
      right: 100%;
      width: 110vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }
  }
`;

const Form = ({
  isOpen,
  handleSearchLaunches,
  handleRocketSelect,
  handleSuccesfulLaunches,
  rockets
}) => {
  return (
    <StyledForm onSubmit={e => e.preventDefault()} isOpen={isOpen}>
      <Label label="Search launches:">
        <Input
          name="searchLaunches"
          inputType="text"
          handleSearchLaunches={handleSearchLaunches}
        />
      </Label>
      <Label label="Rocket used:">
        <Select
          name="rocketSelect"
          options={rockets}
          handleRocketSelect={handleRocketSelect}
        />
      </Label>
      <Label label="Succesful">
        <Select
          name="succesful"
          options={["Yes", "No"]}
          handleSuccesfulLaunches={handleSuccesfulLaunches}
        />
      </Label>
    </StyledForm>
  );
};

export default Form;
