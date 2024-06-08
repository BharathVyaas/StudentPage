import { combineReducers } from "@reduxjs/toolkit";
import { dailyTaskSlice, mcqsandprogramsSlice } from "./dashboard";
import { userSlice } from "./user/userSlice";

export const rootReducer = combineReducers({
  // Auth
  user: userSlice.reducer,

  // Dashboard
  dailyTasks: dailyTaskSlice.reducer,
  mcqsandprograms: mcqsandprogramsSlice.reducer,
});
