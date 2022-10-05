import { GET_PROFILE, UPDATE_PROFILE } from "../actions/userActions";

const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    case UPDATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
