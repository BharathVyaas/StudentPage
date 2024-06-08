import { types } from "./types";

export function loginDispatch(payload) {
  const { userName: UserName, password } = payload;

  if (!UserName || !password)
    throw new Error("not passing valid data to login");

  return {
    type: types.A_LOGIN,
    payload: {
      UserName,
      password,
    },
  };
}
