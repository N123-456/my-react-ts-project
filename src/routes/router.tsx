import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/Signupfolder/Signup";
import LoginPage from "../pages/loginfolder/login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/Product/Product";

const Routes = () => {
  
  const router = createBrowserRouter ([
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
      element: <Dashboard />,
    },
    {
      path: "/product",
      element: <Product/>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
