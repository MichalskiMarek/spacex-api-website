import React, { useEffect } from "react";
import styled from "styled-components";
import MissionPatch from "./MissionPatch";
import LazyLoad, { forceCheck } from "react-lazyload";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  height: 310px;
  width: 220px;
  text-decoration: none;
  color: #3a3a3a;
  padding: 10px;
  transition: all ease-in-out 0.15s;

  &:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  }
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

const LaunchList = ({ launch }) => {
  useEffect(() => {
    forceCheck();
  });
  return (
    <StyledLink to={`/${launch.mission_name.replace(/[(,)]/, "")}`}>
      <StyledUl>
        <li>
          <LazyLoad offset={150} height={200}>
            <MissionPatch missionPatch={launch.links.mission_patch_small} />
          </LazyLoad>
        </li>
        <StyledMissionName>{launch.mission_name}</StyledMissionName>
        <li>{launch.rocket.rocket_name}</li>
      </StyledUl>
    </StyledLink>
  );
};

export default LaunchList;
