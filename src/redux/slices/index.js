import { combineReducers } from "@reduxjs/toolkit";
import { dailyTaskSlice } from "./dashboard";

export const rootReducer = combineReducers({
  dailyTasks: dailyTaskSlice.reducer,
});
