import React, { useState, useEffect } from "react";
import Header from "./Header";
import { createGlobalStyle } from "styled-components";
import LaunchList from "./LaunchesList";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    overflow: ${({ isOpen }) => (isOpen ? "hidden" : "scroll")}
  }
`;

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState(launches);
  const [rocketSelect, setRocketSelect] = useState("All");
  const [wasSuccesful, setWasSuccesful] = useState("All");
  const [searchLaunches, setSearchLaunches] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleRocketSelect = e => setRocketSelect(e.currentTarget.value);
  const handleSearchLaunches = e => setSearchLaunches(e.currentTarget.value);
  const handleSuccesfulLaunches = e => setWasSuccesful(e.currentTarget.value);

  const rockets = launches.map(launch => {
    return launch.rocket.rocket_name;
  });

  const fetchLaunches = async () => {
    const url = "https://api.spacexdata.com/v3/launches";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setLaunches(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!launches.length) fetchLaunches();

    const filterLaunches = () => {
      let result =
        rocketSelect === "All"
          ? launches
          : launches.filter(
              launch => launch.rocket.rocket_name === rocketSelect
            );

      result =
        wasSuccesful === "All"
          ? result
          : result.filter(
              launch =>
                launch.launch_success ===
                (wasSuccesful === "Yes" ? true : false)
            );

      result =
        searchLaunches === ""
          ? result
          : result.filter(launch =>
              launch.mission_name
                .toLowerCase()
                .includes(searchLaunches.toLowerCase())
            );

      setFilteredLaunches(result);
    };

    filterLaunches();
  }, [rocketSelect, launches, wasSuccesful, searchLaunches]);

  return (
    <Router>
      <GlobalStyle isOpen={isOpen} />
      <div className="App">
        <Header
          rockets={[...new Set(rockets)]}
          handleRocketSelect={handleRocketSelect}
          handleSearchLaunches={handleSearchLaunches}
          handleSuccesfulLaunches={handleSuccesfulLaunches}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <LaunchList launches={filteredLaunches} />
      </div>
    </Router>
  );
};

export default App;
