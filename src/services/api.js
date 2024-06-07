import axios from "axios";

const baseURL = "http://localhost:3009/";

const api = axios.create({ baseURL });

export async function getDailyTasksApi(payload) {
  try {
    const res = await api.post("RetriveTestsBystudentId", payload);

    return res;
  } catch (error) {
    return error;
  }
}
