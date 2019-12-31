import React from "react";
import styled from "styled-components";
import logo from "../images/spacex_logo_white.png";
import { Link } from "react-router-dom";

const StyledImg = styled.img`
  height: 22px;
  width: 180px;
  margin-left: 20px;
  position: relative;
  top: -3px;
`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledImg src={logo} alt="SpaceX logo" />
    </Link>
  );
};

export default Logo;
