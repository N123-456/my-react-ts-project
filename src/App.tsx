import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MantineProvider, Container } from '@mantine/core';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./pages/Signupfolder/Signup";
import login from "./pages/loginfolder/login";
function App() {
  return(
    <Signup/>
    
  )
    
//   <MantineProvider>
//   <Container>
//     {/* Your components go here */}
//   </Container>
// </MantineProvider>
  // <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
