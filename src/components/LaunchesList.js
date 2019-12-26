import React from "react";
import styled from "styled-components";
import LaunchCard from "./LaunchCard";

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const LaunchList = props => {
  const allLaunches = props.launches.map(launch => {
    return (
      <LaunchCard
        launch={launch}
        key={launch.launch_date_unix + launch.flight_number}
      />
    );
  });

  return <StyledUl>{allLaunches}</StyledUl>;
};

export default LaunchList;
