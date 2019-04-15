import { SEARCH_FOCUS, SEARCH_BLUR, GET_RECOMMEND_LIST } from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  recommendList: []
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
  if (action.type === GET_RECOMMEND_LIST) {
    return state.set("recommendList", action.value);
  }
  return state;
}