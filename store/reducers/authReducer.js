import {
  AUTHENTICATE_USER,
  LOGIN_USER,
  REGISTER_USER,
} from "../actions/authActions";

const initState = {
  isAuthenticated: false,
  user: { username: "", email: "", verifiedEmail: "", role: "", token: "" },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    case AUTHENTICATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
