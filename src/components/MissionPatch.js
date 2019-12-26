import React from "react";
import styled from "styled-components";
import defaultMissionPatch from "../images/default_mission_patch.png";

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

const MissionPatch = props => {
  return (
    <StyledImg
      src={props.missionPatch ? props.missionPatch : defaultMissionPatch}
      alt="mission patch"
    />
  );
};

export default MissionPatch;
