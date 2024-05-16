import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DefaultUrls } from "../models/enums";
import { Auth } from "../pages/Auth/Auth";
import { Registration } from "../pages/Registration/Registration";
import { Main } from "../pages/Main/Main";
import { Player } from "../pages/Player/Player";

export const router = createBrowserRouter([
  {
    path: DefaultUrls.default,
    element: <App />,
    children: [
      {
        path: DefaultUrls.auth,
        element: <Auth />,
      },
      {
        path: DefaultUrls.registration,
        element: <Registration />,
      },
      {
        path: DefaultUrls.main,
        element: <Main />,
      },
    ],
  },
  {
    path: DefaultUrls.player,
    element: <Player />,
  },
]);
