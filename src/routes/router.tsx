import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/Signupfolder/Signup";
import LoginPage from "../pages/loginfolder/login";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "Sign-up",
      element: <SignupPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
