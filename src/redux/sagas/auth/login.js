import { put, call } from "redux-saga/effects";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../slices/user/userSlice";
import { loginApi } from "../../../services/api";

export function* loginSaga(action) {
  try {
    yield put(loginRequest());

    const res = yield call(loginApi, action.payload);

    const {
      IsAuthenticated: isAuthenticated,
      studentId: userId,
      UserName: userName,
    } = res.data.dbresult[0];

    yield put(loginSuccess({ isAuthenticated, userId, userName }));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
