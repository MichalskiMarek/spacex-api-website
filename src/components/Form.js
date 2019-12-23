import React from "react";
import styled from "styled-components";
import Input from "./Input";

const StyledForm = styled.form``;

const Form = () => {
  return (
    <StyledForm>
      <Input label="Search Launches:" name="searchLaunches"/>
    </StyledForm>
  );
};

export default Form;
