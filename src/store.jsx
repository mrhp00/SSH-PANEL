import { createStore } from "redux";

const initialState = {
currentPage : ""
}

const changeState = (state = initialState, { type, ...rest }) => {
  if (type === "set") {
    return { ...state, ...rest };
  } else if (type === "SET_PAGE") {
    return Object.assign({}, state, { currentPage: rest.currentPage });
  }  else {
    return state;
  }
};

const store = createStore(changeState);
export default store;
