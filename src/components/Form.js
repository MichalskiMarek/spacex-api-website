import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";
import RocketSelect from "./RocketSelect";

const StyledForm = styled.form`
  margin-right: 20px;
  display: flex;
`;

const Form = () => {
  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      <Label label="Search launches:">
        <Input name="searchLaunches" inputType="text" />
      </Label>
      <Label label="Rocket used:">
        <RocketSelect name="rocketSelect" />
      </Label>
      <Label label="Succesful">
        <Input name="succesful" inputType="checkbox" />
      </Label>
    </StyledForm>
  );
};

export default Form;
