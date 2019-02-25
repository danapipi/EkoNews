import { StackNavigator } from "react-navigation";

import Dashboard from "../views/dashboard";
import Details from "../views/dashboard/details";

const AppNavigator = StackNavigator(
  {
    dashboard: {
      screen: Dashboard
    },
    details: {
      screen: Details
    }
  },
  { headerMode: "none" }
);

export default AppNavigator;
