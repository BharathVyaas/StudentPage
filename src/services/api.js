import axios from "axios";
import { getMcqandProgramsService } from "./dashboard/getMcqandProgramService";

const baseURL = "http://localhost:3009/";

const api = axios.create({ baseURL });

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
    const mcqRes = await api.post("RetriveTestsBystudentId_Mcq", payload);

    const codeRes = await api.post("RetriveTestsBystudentId_code", payload);

    const resObj = getMcqandProgramsService(mcqRes, codeRes);

    return resObj;
  } catch (error) {
    throw error;
  }
}

export async function loginApi(payload) {
  try {
    const res = await api.post("AuthenticateStudent", payload);

    return res;
  } catch (error) {
    throw error;
  }
}
