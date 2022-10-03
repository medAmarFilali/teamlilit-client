export const TOGGLE_MOBILE_MENU = "TOGGLE_MOBILE_MENU";
export const CLOSE_MOBILE_MENU = "CLOSE_MOBILE_MENU";
export const OPEN_MOBILE_MENU = "OPEN_MOBILE_MENU";

export const toggleMenu = () => {
  return {
    type: TOGGLE_MOBILE_MENU,
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE_MOBILE_MENU,
  };
};

export const openMenu = () => {
  return {
    type: OPEN_MOBILE_MENU,
  };
};
