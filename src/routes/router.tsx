import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/Signupfolder/Signup";
import LoginPage from "../pages/loginfolder/login";
import Navbar from "../pages/Navbar/NavbarSegmented";
import Notification from "../pages/Notification/Notification";
import Billing from "../pages/Billing/Billing";
import Security from "../pages/Security/Security";
import SSHkeys from "../pages/SSHKeys/SSHkeys";
import Databases from "../pages/Databases/Databases";
import Authentication from "../pages/Authentication/Authentication";
import ProtectedRoute from "./ProtectedRoute";
import { BasicAppShell } from "../pages/AppShell/applayout";
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
      path: "/notification",
      element: <BasicAppShell />,
      children: [{ index: true, element: <Notification /> }],
    },
    {
      path: "/billing",
      element: <BasicAppShell />,
      children: [{ index: true, element: <Billing /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
