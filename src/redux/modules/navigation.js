import AppNavigator from "../../navigation";

const initState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("dashboard")
);

const navReducer = (state = initState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
