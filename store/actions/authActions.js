import * as api from "../../api";

export const REGISTER_USER = "REGISTER_USER";

export const registerUser = (user) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.registerUserCall(user);
      dispatch({ type: REGISTER_USER, payload: data });
      resolve(data);
    } catch (err) {
      console.log(err);
      reject(err.response.data.message);
    }
  });
};
