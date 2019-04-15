import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    /*const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;*/
    return state.set("focused", true);
  }
  if (action.type === SEARCH_BLUR) {
    return state.set("focused", false);
  }
  return state;
}