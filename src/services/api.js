import axios from "axios";
import { getMcqandProgramsService } from "./dashboard/getMcqandProgramService";

const baseURL = "http://49.207.10.13:3009/";

export const api = axios.create({ baseURL });

export async function getDailyTasksApi(payload) {
  try {
    const res = await api.post("RetriveTestsBystudentId", payload);

    return res;
  } catch (error) {
    throw error;
  }
}

export async function getMcqandProgramsApi(payload) {
  try {
    function formatDateToLocal(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    const mcqRes = await api.post("RetriveTestsBystudentId_Mcq", {
      studentId: payload.studentId,
      createdAt: formatDateToLocal(payload.createdAt),
    });

    const codeRes = await api.post("RetriveTestsBystudentId_code", {
      studentId: payload.studentId,
      createdAt: formatDateToLocal(payload.createdAt),
    });

    const resObj = getMcqandProgramsService(mcqRes, codeRes);

    return resObj;
  } catch (error) {
    throw error;
  }
}

export async function loginApi(payload) {
  try {
    const res = await api.post("AuthenticateStudent", payload);

    if (
      res &&
      res.data &&
      res.data.dbresult &&
      res.data.dbresult[0] &&
      res.data.dbresult[0].IsAuthenticated
    ) {
      let user =
        localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user"));

      if (!user) user = {};

      user.IsAuthenticated = true;

      user = JSON.stringify(user);

      localStorage.setItem("user", user);
    }

    return res;
  } catch (error) {
    throw error;
  }
}
