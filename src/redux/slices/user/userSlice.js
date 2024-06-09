import { createSlice } from "@reduxjs/toolkit";

const baseProfile = {
  name: null,
  email: null,
  profilePicture: null,
  role: null,
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
  state: "stale",
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
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isPending = false;
      state.state = "resolve";
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.authToken = action.payload.authToken;
      state.profile = action.payload.profile;
    },
    loginFailure(state) {
      state.isError = true;
      state.isLoading = false;
      state.state = "reject";
    },
    logout(state) {
      state.userId = baseState.userId;
      state.userName = baseState.userName;
      state.firstName = baseState.firstName;
      state.lastName = baseState.lastName;
      state.email = baseState.email;
      state.authToken = baseState.authToken;
      state.isAuthenticated = baseState.isAuthenticated;
      state.profile = baseProfile;
      state.isLoading = false;
      state.isError = false;
      state.isPending = false;
      state.state = "stale";
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
