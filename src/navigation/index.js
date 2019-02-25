import { StackNavigator } from "react-navigation";

import Dashboard from "../views/dashboard";
// import Details from "../views/dashboard/details";

const AppNavigator = StackNavigator(
  {
    dashboard: {
      screen: Dashboard
    }
  },
  { headerMode: "none" }
);

export default AppNavigator;
