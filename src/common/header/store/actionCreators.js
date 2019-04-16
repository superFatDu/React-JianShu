import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

const handleRecomList = (data) => ({
  type: actionTypes.GET_RECOMMEND_LIST,
  value: fromJS(data),
  pageTotal: Math.ceil(data.length / 10)
});

export const handleSearchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const handleSearchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const handleSearchMouseEnter = () => ({
  type: actionTypes.SEARCH_MOUSE_ENTER
});

export const handleSearchMouseLeave = () => ({
  type: actionTypes.SEARCH_MOUSE_LEAVE
});

export const handleSwitchList = (value) => ({
  type: actionTypes.SWITCH_LIST,
  value
});

export const handleRecommendList = () => {
  return (dispatch) => {
    axios.get("/api/recommendList.json").then(res => {
      res = res.data.data;
      dispatch(handleRecomList(res));
    }).catch(err => {
      throw Error(err);
    })
  }
};