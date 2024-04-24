import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/Signupfolder/Signup";
import LoginPage from "../pages/loginfolder/login";
import Dashboard from "../pages/Navbar/Dashboard";
import Product from "../pages/Product/Product";
import ProtectedRoute from "./ProtectedRoute";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "Sign-up",
      element: <SignupPage />,
    },
    {
      path: "/",
      element: <LoginPage />,
    },

    {
      path: "/dash",
      element:(<ProtectedRoute> <Dashboard />
      </ProtectedRoute>),
    },

  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
