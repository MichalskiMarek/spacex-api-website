import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoMatch = () => {
  return (
    <StyledDiv>
      <h2>404</h2>
      <div>Sorry! I can't find this page!</div>
    </StyledDiv>
  );
};

export default NoMatch;
