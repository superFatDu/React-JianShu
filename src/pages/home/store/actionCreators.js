import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

export const handleTopicList = () => {
  return (dispatch) => {
    axios.get("/api/topicList.json").then(res => {
      res = res.data.data;
      const action  = {
        type: actionTypes.TOPIC_LIST,
        value: fromJS(res)
      };
      dispatch(action);
    })
  }
};