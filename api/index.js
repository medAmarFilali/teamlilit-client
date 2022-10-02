import axios from "axios";

const API = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
});

export const registerUserCall = (userData) =>
  API.post("/user/register", userData);
export const loginUserCall = (userData) => API.post("/user/login", userData);
export const logoutUserCall = () => API.post("user/logout");
export const authenticateUserCall = () => API.post("/user/authenticate");
