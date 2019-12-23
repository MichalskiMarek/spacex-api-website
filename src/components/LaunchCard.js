import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
`;

const LaunchList = props => {
  return <StyledLi>{props.launch}</StyledLi>;
};

export default LaunchList;
