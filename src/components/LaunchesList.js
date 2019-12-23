import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LaunchCard from "./LaunchCard";

const StyledUl = styled.ul`
  height: 22px;
  width: 180px;
  margin-left: 20px;
  position: relative;
  top: -3px;
`;

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);

  const fetchLaunches = async () => {
    const url = "https://api.spacexdata.com/v3/launches";
    const response = await fetch(url);
    const json = await response.json();

    setLaunches(json);
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  const allLaunches = launches.map(launch => {
    console.log(launch);

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
