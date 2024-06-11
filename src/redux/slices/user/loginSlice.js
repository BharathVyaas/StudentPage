import { createSlice } from "@reduxjs/toolkit";

const baseState = {
  isFormValid:
    (JSON.parse(localStorage.getItem("user")).password === "Admin@123"
      ? true
      : false) &&
    localStorage.getItem("user") &&
    JSON.parse(localStorage.getItem("user")).userName
      ? true
      : false,
  userName: {
    value: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).userName
      : "",
    isDirty: localStorage.getItem("user") ? true : false,
    isValid:
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).userName
        ? true
        : false,
  },
  password: {
    value: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).password
      : "",
    isDirty: localStorage.getItem("user") ? true : false,
    isValid:
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).password === "Admin@123"
        ? true
        : false,
  },
  email: {
    value: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).email
      : "",
    isDirty: localStorage.getItem("user") ? true : false,
    isValid:
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).email
        ? true
        : false,
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState: { ...baseState },
  reducers: {
    setUserName(state, action) {
      let user = localStorage.getItem("user");

      if (!user) user = "{}";
      user = JSON.parse(user);
      user.userName = action.payload.value;

      localStorage.setItem("user", JSON.stringify(user));

      state.userName.value = action.payload.value;

      if (!state.userName.isDirty) {
        state.userName.isDirty = true;
      }

      if (!state.userName.isValid) {
        if (state.userName.value.length > 3) {
          state.userName.isValid = true;
        }
      }

      if (state.userName.isValid) {
        if (state.userName.value.length <= 3) {
          state.userName.isValid = false;
        }
      }

      if (!state.isFormValid) {
        if (state.password.isValid && state.userName.value.length > 3) {
          state.isFormValid = true;
        }
      }

      if (state.password.isValid) {
        if (state.userName.length > 3) state.isFormValid = true;
      }
    },
    setPassword(state, action) {
      let user = localStorage.getItem("user");

      if (!user) user = "{}";
      user = JSON.parse(user);
      user.password = action.payload.value;

      localStorage.setItem("user", JSON.stringify(user));

      state.password.value = action.payload.value;

      if (!state.password.isDirty) {
        state.password.isDirty = true;
      }

      if (action.payload.value === "Admin@123") {
        if (!state.password.isValid) state.password.isValid = true;
      } else {
        if (state.password.isValid) state.password.isValid = false;
      }

      if (action.payload.value === "Admin@123") {
        if (!state.isFormValid) state.isFormValid = true;
      }

      if (action.payload.value !== "Admin@123") {
        if (state.isFormValid) state.isFormValid = false;
      }
    },
    setEmail(state, action) {
      let user = localStorage.getItem("user");

      if (!user) user = "{}";
      user = JSON.parse(user);
      user.email = action.payload.value;

      localStorage.setItem("user", JSON.stringify(user));

      state.email.value = action.payload.value;

      if (!state.email.isDirty) {
        state.email.isDirty = true;
      }
    },
    resetLoginState(state) {
      state.userName = { ...baseState.userName };
      state.password = { ...baseState.password };
      state.email = { ...baseState.email };
    },
  },
});

export const { setUserName, setPassword, setEmail, resetLoginState } =
  loginSlice.actions;

/**
import { createSlice } from "@reduxjs/toolkit";

const baseState = {
  isFormValid: false,
  userName: {
    value: "",
    isDirty: false,
    isValid: false,
  },
  password: {
    value: "",
    isDirty: false,
    isValid: false,
  },
  email: {
    value: "",
    isDirty: false,
    isValid: false,
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState: { ...baseState },
  reducers: {
    setUserName(state, action) {
      state.userName.value = action.payload.value;

      if (!state.userName.isDirty) {
        state.userName.isDirty = true;
      }

      if (!state.userName.isValid) {
        if (state.userName.value.length > 3) {
          state.userName.isValid = true;
        }
      }

      if (state.userName.isValid) {
        if (state.userName.value.length <= 3) {
          state.userName.isValid = false;
        }
      }

      if (!state.isFormValid) {
        if (state.password.isValid && state.userName.value.length > 3) {
          state.isFormValid = true;
        }
      }

      if (state.password.isValid) {
        if (state.userName.length > 3) state.isFormValid = true;
      }
    },
    setPassword(state, action) {
      state.password.value = action.payload.value;

      if (!state.password.isDirty) {
        state.password.isDirty = true;
      }

      if (action.payload.value === "Admin@123") {
        if (!state.password.isValid) state.password.isValid = true;
      } else {
        if (state.password.isValid) state.password.isValid = false;
      }

      if (action.payload.value === "Admin@123") {
        if (!state.isFormValid) state.isFormValid = true;
      }

      if (action.payload.value !== "Admin@123") {
        if (state.isFormValid) state.isFormValid = false;
      }
    },
    setEmail(state, action) {
      state.email.value = action.payload.value;

      if (!state.email.isDirty) {
        state.email.isDirty = true;
      }
    },
    resetLoginState(state) {
      state.userName = { ...baseState.userName };
      state.password = { ...baseState.password };
      state.email = { ...baseState.email };
    },
  },
});

export const { setUserName, setPassword, setEmail, resetLoginState } =
  loginSlice.actions;
*/
