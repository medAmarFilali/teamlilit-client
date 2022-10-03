import {
  CLOSE_MOBILE_MENU,
  TOGGLE_MOBILE_MENU,
  OPEN_MOBILE_MENU,
} from "../actions/menuActions";

const initState = {
  mobileMenu: false,
};

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      const mobileMenu = !state.mobileMenu;
      return mobileMenu;
    case CLOSE_MOBILE_MENU:
      return { ...state, mobileMenu: false };
    case OPEN_MOBILE_MENU:
      return { ...state, mobileMenu: true };
    default:
      return state;
  }
};

export default menuReducer;
