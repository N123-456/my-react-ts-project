import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../contextApi/dataContext";

const ProtectedRoute = ({ children }) => {}
 { const navigate = useNavigate();
  const user = useContext(myContext);
  if (user) {
    navigate("/navbar");
    
  }
  return children;
};

export default ProtectedRoute;
