import { takeLatest } from "redux-saga/effects";
import { types } from "../../actions/types";
import { dailyTasksSaga } from "./dailyTasks";

export function* dashboardWatcherSaga() {
  yield takeLatest(types.D_DAILY_TASKS_LIST, dailyTasksSaga);
}
