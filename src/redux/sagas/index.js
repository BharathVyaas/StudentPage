import { all } from "redux-saga/effects";
import { dashboardWatcherSaga } from "./dashboard";
import { authWatcherSaga } from "./auth";
import { resultsWatcherSaga } from "./result";

export function* adminSaga() {
  yield all([dashboardWatcherSaga(), authWatcherSaga(), resultsWatcherSaga()]);
}
