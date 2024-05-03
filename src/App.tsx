import React from "react";
import "./App.css";
import Routes from "./routes/router";
import DataState from "./contextApi/dataState";
function App() {
  return (
    <DataState>
      <Routes />
    </DataState>
      
  );
}

export default App;
