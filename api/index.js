import axios from "axios";

const API = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
});

export const registerUserCall = (userData) =>
  API.post("/user/register", userData);
export const loginUserCall = (userData) => API.post("/user/login", userData);
export const logoutUserCall = () => API.post("user/logout");
export const authenticateUserCall = (token) =>
  API.post("/user/authenticate", token);
export const updateUserInfo = (profileData) =>
  API.post("/user/update", profileData);
export const getUserInfo = (token) => API.post("/user/info", { token });
