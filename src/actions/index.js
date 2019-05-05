export const toggleMenu = () => {
  return {
    type: "TOGGLE_MENU"
  };
};

export const langSwitch = lang => {
  return {
    type: "SWITCH_LANGUAGE",
    payload: lang
  };
};
