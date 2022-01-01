import { LOGIN_USER, REGISTER_USER } from "../actions/authActions";

const initState = {
  isAuthenticated: false,
  user: { username: "", email: "", verifiedEmail: "", role: "" },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
