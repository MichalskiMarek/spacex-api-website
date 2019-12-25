import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";

const StyledForm = styled.form`
  margin-right: 20px;
  display: flex;
`;

const Form = props => {
  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      <Label label="Search launches:">
        <Input
          name="searchLaunches"
          inputType="text"
          handleSearchLaunches={props.handleSearchLaunches}
        />
      </Label>
      <Label label="Rocket used:">
        <Select
          name="rocketSelect"
          options={props.rockets}
          handleRocketSelect={props.handleRocketSelect}
        />
      </Label>
      <Label label="Succesful">
        <Select
          name="succesful"
          options={["Yes", "No"]}
          handleSuccesfulLaunches={props.handleSuccesfulLaunches}
        />
      </Label>
    </StyledForm>
  );
};

export default Form;
