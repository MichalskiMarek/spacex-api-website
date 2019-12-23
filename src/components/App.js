import React from "react";
import Header from "./Header";
import { createGlobalStyle } from "styled-components";
import LaunchList from "./LaunchesList";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <LaunchList />
      </div>
    </>
  );
}

export default App;
