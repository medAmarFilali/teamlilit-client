import axios from "axios";

const API = axios.create({
  baseURL: process.env.HOST_SERVER,
  withCredentials: true,
});

export const registerUserCall = (userData) =>
  API.post("/user/register", userData);
export const loginUserCall = (userData) => API.post("/user/login", userData);
export const authenticateUserCall = (userData) =>
  API.post("/user/authenticate", userData);
