import React from "react";
import styled from "styled-components";
import MissionPatch from "./MissionPatch";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  padding: 10px;
  width: 220px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const StyledMissionName = styled.li`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const LaunchList = props => {
  return (
    <StyledLi>
      <StyledUl>
        <li>
          <MissionPatch missionPatch={props.launch.links.mission_patch_small} />
        </li>
        <StyledMissionName>{props.launch.mission_name}</StyledMissionName>
        <li>{props.launch.rocket.rocket_name}</li>
      </StyledUl>
    </StyledLi>
  );
};

export default LaunchList;
