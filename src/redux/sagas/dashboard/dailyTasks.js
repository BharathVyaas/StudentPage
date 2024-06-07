import { call, put } from "redux-saga/effects";
import {
  fetchDialyTasksError,
  fetchDialyTasksStart,
  fetchDialyTasksSuccess,
} from "../../slices/dashboard";
import { getDailyTasksApi } from "../../../services/api";

export function* dailyTasksSaga(action) {
  try {
    yield put(fetchDialyTasksStart());

    const res = yield call(getDailyTasksApi, action.payload);

    yield put(fetchDialyTasksSuccess(res.body));
  } catch (error) {
    yield put(
      fetchDialyTasksError({
        error: { error: "stuff", code: 200, message: "placeholder" },
      })
    );
  }
}
