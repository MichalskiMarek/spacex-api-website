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
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.75);

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    bottom: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
`;

const StyledP = styled.p`
  margin: 5px;
`;

const StyledSpan = styled.span`
  font-weight: bold;
`;

const StyledSection = styled.section`
  padding: 20px;
`;

const StyledH3 = styled.h3`
  margin: 10px 5px;
`;

const MissionDetails = ({ launch }) => {
  const launchDate = new Date(launch.launch_date_local);

  return (
    <StyledWrapper>
      <StyledDiv>
        <StyledSection>
          <MissionPatch missionPatch={launch.links.mission_patch} />
          <StyledP>
            <StyledSpan>Mission number: </StyledSpan>
            {launch.flight_number}
          </StyledP>
          <StyledP>
            <StyledSpan>Launch date: </StyledSpan>
            {launchDate.toLocaleDateString()}
          </StyledP>
          <StyledP>
            <StyledSpan>Rocket used: </StyledSpan>
            {launch.rocket.rocket_name}
          </StyledP>
        </StyledSection>
        <StyledSection>
          <StyledH3>{launch.mission_name}</StyledH3>
          <StyledP>
            <StyledSpan>Launch site: </StyledSpan>
            {launch.launch_site.site_name_long}
          </StyledP>
          {launch.details ? <StyledP>{launch.details}.</StyledP> : null}
        </StyledSection>
        <StyledLink to="/">Close</StyledLink>
      </StyledDiv>
    </StyledWrapper>
  );
};

export default MissionDetails;
