import axios from "axios";

const API = axios.create({
  baseURL: process.env.HOST_SERVER,
  withCredentials: true,
});

export const registerUserCall = (userData) =>
  API.post("/user/register", userData);
