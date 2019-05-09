import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const menuReducer = (state = false, action) => {
  if (action.type === "TOGGLE_MENU") {
    return !state;
  } else {
    return state;
  }
};

const languageReducer = (state = "eng", action) => {
  switch (action.type) {
    case "SWITCH_LANGUAGE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  isMenuOpened: menuReducer,
  language: languageReducer,
  form: formReducer
});
