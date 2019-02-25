import { combineReducers } from "redux";
import dashboard from "./dashboard";
import navigation from "./navigation";

const appReducers = combineReducers({
  dashboard,
  navigation
});

export default appReducers;
