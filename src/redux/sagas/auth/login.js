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
      UserName: email,
      FirstName: firstName,
      LastName: lastName,
    } = res.data.dbresult[0];

    yield put(
      loginSuccess({
        isAuthenticated,
        userId,
        userName,
        firstName,
        lastName,
        email,
      })
    );
  } catch (error) {
    console.log({
      message: error.response.data.message,
      status: error.response.data.success,
      isSuccessResponse: error.response.status,
    });

    if (error.response.status === 401) {
      yield put(
        loginFailure({
          error: {
            message: error.response.data.message,
            status: error.response.data.success,
            isSuccessResponse: error.response.status,
          },
        })
      );
    } else {
      yield put(loginFailure(error));
    }
  }
}
