import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  user: userReducer,
});

export default rootReducer;
