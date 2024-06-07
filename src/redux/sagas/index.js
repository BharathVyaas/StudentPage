import { all } from "redux-saga/effects";
import { dashboardWatcherSaga } from "./dashboard";

export function* adminSaga() {
  yield all([dashboardWatcherSaga()]);
}
