import * as api from "../../api";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

export const registerUser = (user, router) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.registerUserCall(user);
      dispatch({ type: REGISTER_USER, payload: data });
      router.push("/");
      resolve(data);
    } catch (err) {
      console.log(err);
      reject(err?.response?.data?.message);
    }
  });
};

export const loginUser = (user, router, nextPath) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.loginUserCall(user);
      localStorage.setItem("access_token", data.user.token);
      dispatch({ type: LOGIN_USER, payload: data });

      if (nextPath) {
        router.push(nextPath);
      } else {
        router.push("/");
      }

      resolve(data);
    } catch (err) {
      console.log(err);
      reject(err?.response?.data?.message);
    }
  });
};

export const logoutUser = () => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.logoutUserCall();
      localStorage.removeItem("access_token");
      dispatch({ type: LOGOUT_USER, payload: data });
      resolve(data);
    } catch (err) {
      reject(err?.response?.data?.message);
    }
  });
};

export const authenticateUser = () => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = { token: localStorage.getItem("access_token") };
      const { data } = await api.authenticateUserCall(token);
      dispatch({ type: AUTHENTICATE_USER, payload: data });
      resolve(data);
    } catch (err) {
      reject(err?.response?.data?.message);
    }
  });
};
