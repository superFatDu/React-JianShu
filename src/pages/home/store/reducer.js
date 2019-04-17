import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  listItems: [{
    title: "60 余家免费正版图片网站，应该是目前最全的的集合了",
    desc: "上周在下厨房美食APP看到第二届早餐马拉松活动，立即报名参加，活动口号是“坚持21天早餐打卡，养成自律习惯”，不禁莞尔一笑，早在去年我就参加两次",
    writer: "南蛮文子"
  }, {
    title: "60 余家免费正版图片网站，应该是目前最全的的集合了",
    desc: "上周在下厨房美食APP看到第二届早餐马拉松活动，立即报名参加，活动口号是“坚持21天早餐打卡，养成自律习惯”，不禁莞尔一笑，早在去年我就参加两次",
    writer: "南蛮文子"
  }, {
    title: "60 余家免费正版图片网站，应该是目前最全的的集合了",
    desc: "上周在下厨房美食APP看到第二届早餐马拉松活动，立即报名参加，活动口号是“坚持21天早餐打卡，养成自律习惯”，不禁莞尔一笑，早在去年我就参加两次",
    writer: "南蛮文子"
  }, {
    title: "60 余家免费正版图片网站，应该是目前最全的的集合了",
    desc: "上周在下厨房美食APP看到第二届早餐马拉松活动，立即报名参加，活动口号是“坚持21天早餐打卡，养成自律习惯”，不禁莞尔一笑，早在去年我就参加两次",
    writer: "南蛮文子"
  }, {
    title: "60 余家免费正版图片网站，应该是目前最全的的集合了",
    desc: "上周在下厨房美食APP看到第二届早餐马拉松活动，立即报名参加，活动口号是“坚持21天早餐打卡，养成自律习惯”，不禁莞尔一笑，早在去年我就参加两次",
    writer: "南蛮文子"
  }, {
    title: "60 余家免费正版图片网站，应该是目前最全的的集合了",
    desc: "上周在下厨房美食APP看到第二届早餐马拉松活动，立即报名参加，活动口号是“坚持21天早餐打卡，养成自律习惯”，不禁莞尔一笑，早在去年我就参加两次",
    writer: "南蛮文子"
  }]
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.TOPIC_LIST) {
    return state.set("topicList", action.value);
  }
  return state;
}