import { api } from "../api";

export const programResultsApi = async (payload) => {
  try {
    const res = await api.post("RetriveProgramResults", payload);

    console.log(res);

    return res;
  } catch (error) {
    throw error;
  }
};
