import React from "react";
import styled from "styled-components";
import LaunchCard from "./LaunchCard";
import { Switch, Route } from "react-router-dom";
import MissionDetails from "./MissionDetails";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const LaunchList = props => {
  const allLaunches = props.launches.map(launch => {
    return (
      <div key={launch.launch_date_unix + launch.flight_number}>
        <LaunchCard launch={launch} />
        <Route path={`/${launch.mission_name}`}>
          <MissionDetails launch={launch} />
        </Route>
      </div>
    );
  });

  return (
    <Switch>
      <StyledDiv>{allLaunches}</StyledDiv>
    </Switch>
  );
};

export default LaunchList;
