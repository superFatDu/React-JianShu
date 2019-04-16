import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  recommendList: [],
  pageNum: 1,
  pageTotal: 1,
  mouseIn: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.merge({
        focused: true,
        pageNum: 1
      });
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionTypes.GET_RECOMMEND_LIST:
      //return state.set("recommendList", action.value).set("pageTotal", action.pageTotal);
      return state.merge({
        recommendList: action.value,
        pageTotal: action.pageTotal
      });
    case actionTypes.SEARCH_MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.SEARCH_MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.SWITCH_LIST:
      return state.set("pageNum", action.value);
    default:
      return state;
  }
}