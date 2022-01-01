const initState = {
  isAuthenticated: false,
  user: { username: "", email: "", verifiedEmail: "", role: "" },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
