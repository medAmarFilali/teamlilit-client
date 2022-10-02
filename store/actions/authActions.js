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
      dispatch({ type: LOGOUT_USER, payload: data });
      resolve(data);
    } catch (err) {
      console.log(err);
      reject(err?.response?.data?.message);
    }
  });
};

export const authenticateUser = () => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.authenticateUserCall();
      console.log("Data: ", data);
      dispatch({ type: AUTHENTICATE_USER, payload: data });
      resolve(data);
    } catch (err) {
      console.log(err);
      reject(err?.response?.data?.message);
    }
  });
};
