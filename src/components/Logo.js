import React from "react";
import styled from "styled-components";
import logo from "../images/spacex_logo_white.png";

const StyledImg = styled.img`
  height: 22px;
  width: 180px;
  margin-left: 20px;
  position: relative;
  top: -3px;
`;

const Logo = () => {
  return (
    <a href="/">
      <StyledImg src={logo} alt="SpaceX logo" />
    </a>
  );
};

export default Logo;
