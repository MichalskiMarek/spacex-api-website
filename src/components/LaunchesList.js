import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import MissionDetails from "./MissionDetails";
import NoMatch from "./NoMatch";
import LoadingMissions from "./LoadingMissions";

const LaunchCard = lazy(() => import("./LaunchCard"));

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
      <Suspense fallback={<LoadingMissions />}>
        <Switch>
          <Route exact path="/" render={() => allLaunches} />
          {routes}
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </StyledDiv>
  );
};

export default LaunchList;
