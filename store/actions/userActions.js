import * as api from "../../api";

export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const getProfile = () => async (dispatch) => {
  return new Promise(async (reslve, reject) => {
    try {
      const token = localStorage.getItem("access_token");

      const { data } = await api.getUserInfo(token);

      console.log("data: ", data);
    } catch (err) {
      reject(err?.response?.data?.message);
    }
  });
};

export const updateProfile = (profileData) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await api.updateUserInfo({ ...profileData, token });

      dispatch({ type: UPDATE_PROFILE, payload: data });
      resolve(data);
    } catch (err) {
      console.log("User error: ", err);
      reject(err?.response?.data?.message);
    }
  });
};
