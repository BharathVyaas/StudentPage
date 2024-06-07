import { getBasicGetSlice } from "../../util/get";

export const dailyTaskSlice = getBasicGetSlice({
  sliceName: "dailyTasks",
});

export const {
  fetchStart: fetchDialyTasksStart,
  fetchSuccess: fetchDialyTasksSuccess,
  fetchError: fetchDialyTasksError,
} = dailyTaskSlice.actions;
