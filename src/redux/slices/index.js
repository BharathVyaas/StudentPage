import { combineReducers } from "@reduxjs/toolkit";
import { dailyTaskSlice, mcqsandprogramsSlice } from "./dashboard";
import { userSlice } from "./user/userSlice";
import { loginSlice } from "./user/loginSlice";
import { programResultSlice } from "./result";

export const rootReducer = combineReducers({
  // Auth
  user: userSlice.reducer,
  login: loginSlice.reducer,

  // Dashboard
  dailyTasks: dailyTaskSlice.reducer,
  mcqsandprograms: mcqsandprogramsSlice.reducer,

  // Program
  programResults: programResultSlice.reducer,
});
