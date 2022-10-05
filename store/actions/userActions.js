import * as api from "../../api";

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const GET_PROFILE = "GET_PROFILE";

export const getProfile = () => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = localStorage.getItem("access_token");

      const { data } = await api.getUserInfo(token);
      dispatch({ type: GET_PROFILE, payload: data.profileInfo });

      resolve(data);
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

      dispatch({ type: UPDATE_PROFILE, payload: data.profileData });
      resolve(data);
    } catch (err) {
      console.log("User error: ", err);
      reject(err?.response?.data?.message);
    }
  });
};
