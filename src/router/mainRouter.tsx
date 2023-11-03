import { createBrowserRouter } from "react-router-dom";
import Layout from "../statics/Layout";
import Landing from "../pages/Landing";
import Create from "../pages/Create";
import Send from "../pages/Send";
import Profile from "../pages/Profile";


const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/create-user",
        index: true,
        element: <Create />,
      },
      {
        path: "/:userID/:friendID/send-request",
        index: true,
        element: <Send/>,
      },
      {
        path: "/profile",
        index: true,
        element: <Profile/>,
      },
    ],
  },
]);

export default mainRouter;
