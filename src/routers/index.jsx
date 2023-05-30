import { useRoutes } from "react-router";
import admin from "./adminRouters";
import login from "./login";

function Routes() {
  let Route = [];
  Route.push(admin);
  Route.push(login);
  return useRoutes(Route);
}

export default Routes;
