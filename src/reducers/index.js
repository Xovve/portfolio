import { combineReducers } from "redux";

const menuReducer = (state = false, action) => {
  if (action.type === "TOGGLE_MENU") {
    return !state;
  } else {
    return state;
  }
};

const languageReducer = (state = "eng", action) => {
  if (action.type === "SWITCH_LANGUAGE") {
    return action.payload;
  } else {
    return state;
  }
};

export default combineReducers({
  isMenuOpened: menuReducer,
  language: languageReducer
});
