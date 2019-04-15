import { SEARCH_FOCUS, SEARCH_BLUR, GET_RECOMMEND_LIST } from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

export const handleSearchFocus = () => ({
  type: SEARCH_FOCUS
});

export const handleSearchBlur = () => ({
  type: SEARCH_BLUR
});

const handleRecomList = (data) => ({
  type: GET_RECOMMEND_LIST,
  value: fromJS(data)
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