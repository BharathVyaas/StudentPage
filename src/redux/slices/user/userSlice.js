import { createSlice } from "@reduxjs/toolkit";

const baseProfile = {
  name: null,
  email: null,
  profilePicture: null,
  role: null,
};

const baseError = {
  message: "",
  status: null,
  isSuccessResponse: false,
};

const baseState = {
  userId: null,
  userName: null,
  firstName: null,
  lastName: null,
  email: null,
  authToken: null,
  isAuthenticated: null,
  profile: baseProfile,
  isLoading: false,
  isError: false,
  isPending: false,
  state: "idel",
  statusMessage: null,
  statusCode: null,
  error: baseError,
};

export const userSlice = createSlice({
  name: "user",
  initialState: baseState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.isError = false;
      state.state = "request";
      state.isPending = true;
      state.statusMessage = null;
      state.statusCode = null;
      state.error = baseError;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isPending = false;
      state.state = "resolve";
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.authToken = action.payload.authToken;
      state.profile = action.payload.profile;
      state.statusMessage = null;
      state.statusCode = action.payload.statusCode;
      state.error = baseError;
    },
    loginFailure(state, action) {
      state.isError = true;
      state.isLoading = false;
      state.state = "reject";
      state.statusMessage = action.payload.statusMessage;
      state.statusCode = action.payload.statusCode;
      state.error.message = action.payload.error?.message;
      state.error.status = action.payload.error?.status;
      state.error.status = action.payload.error?.isSuccessResponse;
    },
    logout(state) {
      state.userId = baseState.userId;
      state.userName = baseState.userName;
      state.firstName = baseState.firstName;
      state.lastName = baseState.lastName;
      state.email = baseState.email;
      state.authToken = baseState.authToken;
      state.isAuthenticated = baseState.isAuthenticated;
      state.statusMessage = baseState.statusMessage;
      state.statusCode = baseState.statusCode;
      state.profile = baseProfile;
      state.isLoading = false;
      state.isError = false;
      state.isPending = false;
      state.state = "idel";
      state.error = baseState.error;
    },
    uploadProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  uploadProfile,
} = userSlice.actions;
