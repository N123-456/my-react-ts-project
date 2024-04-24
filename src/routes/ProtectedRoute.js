import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import auth from "../auth-service";
import myContext from "../contextApi/dataContext";

const ProtectedRoute = ({ children }) => {
  const user = useContext(myContext);
  if (!user.isAuthenticated) {
    return Navigate("/dash");
  }
  return children;
};

export default ProtectedRoute;
