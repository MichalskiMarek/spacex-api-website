import React from "react";
import styled from "styled-components";
import logo from "../images/spacex_logo_white.png";

const StyledImg = styled.img`
  height: 22px;
  width: 180px;
`;

const Logo = () => {
  return <StyledImg src={logo} alt="SpaceX logo" />;
};

export default Logo;
