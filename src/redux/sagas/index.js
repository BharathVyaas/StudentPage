import { all } from "redux-saga/effects";
import { dashboardWatcherSaga } from "./dashboard";
import { authWatcherSaga } from "./auth";

export function* adminSaga() {
  yield all([dashboardWatcherSaga(), authWatcherSaga()]);
}
