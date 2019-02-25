import { all } from "redux-saga/effects";
import watchDashboard from "./dashboard";

export default function* rootSaga() {
  yield all([...watchDashboard]);
}
