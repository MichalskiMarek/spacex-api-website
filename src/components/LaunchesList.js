import React from "react";
import styled from "styled-components";
import LaunchCard from "./LaunchCard";

const StyledUl = styled.ul`
  height: 22px;
  width: 180px;
  margin-left: 20px;
  position: relative;
  top: -3px;
`;

const LaunchList = props => {
  const allLaunches = props.launches.map(launch => {
    return (
      <LaunchCard
        launch={launch.mission_name}
        key={launch.launch_date_unix + launch.flight_number}
      />
    );
  });

  return <StyledUl>{allLaunches}</StyledUl>;
};

export default LaunchList;
