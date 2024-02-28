import { routes } from "../constants/routes";
import History from "../pages/history/History";
import Home from "../pages/home/Home";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.history,
    Component: History,
  },
];
