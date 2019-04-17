import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.TOPIC_LIST) {
    return state.set("topicList", action.value);
  }
  return state;
}