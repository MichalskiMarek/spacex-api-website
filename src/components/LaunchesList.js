import React from "react";
import styled from "styled-components";
import LaunchCard from "./LaunchCard";
import { Switch, Route } from "react-router-dom";
import MissionDetails from "./MissionDetails";
import NoMatch from "./NoMatch";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const LaunchList = ({ launches }) => {
  const allLaunches = launches.map(launch => {
    return (
      <LaunchCard
        launch={launch}
        key={launch.launch_date_unix + launch.flight_number}
      />
    );
  });

  const routes = launches.map(launch => {
    return (
      <Route
        exact
        path={`/${launch.mission_name.replace(/[(,)]/, "")}`}
        render={() => <MissionDetails launch={launch} />}
        key={launch.launch_date_unix + launch.mission_id}
      />
    );
  });

  return (
    <StyledDiv>
      <Switch>
        <Route exact path="/" render={() => allLaunches} />
        {routes}
        <Route component={NoMatch} />
      </Switch>
    </StyledDiv>
  );
};

export default LaunchList;
