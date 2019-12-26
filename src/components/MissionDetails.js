import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MissionPatch from "./MissionPatch";

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3a3a3a;
  position: absolute;
  top: 7px;
  right: 7px;
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 70%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const MissionDetails = ({ launch }) => {
  return (
    <StyledWrapper>
      <StyledDiv>
        <MissionPatch missionPatch={launch.links.mission_patch} />
        {launch.flight_number}. {launch.mission_name}
        <StyledLink to="/">Close</StyledLink>
      </StyledDiv>
    </StyledWrapper>
  );
};

export default MissionDetails;
