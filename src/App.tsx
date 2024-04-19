import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, Container } from "@mantine/core";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./pages/Signupfolder/Signup";
import login from "./pages/loginfolder/login";
import Routes from "./routes/router";
function App() {
  return <Routes />;
}

export default App;
