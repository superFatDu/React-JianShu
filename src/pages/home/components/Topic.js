import React, { Component } from "react";
import {
  TopicWrapper,
  TopicItem,
  TopicItemImg
}
from "../style"

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <TopicItemImg/>
          简书
        </TopicItem>
        <TopicItem>
          <TopicItemImg/>
          996
        </TopicItem>
        <TopicItem>
          <TopicItemImg/>
          京东
        </TopicItem>
        <TopicItem>
          <TopicItemImg/>
          腾讯
        </TopicItem>
        <TopicItem>
          <TopicItemImg/>
          简书
        </TopicItem>
        <TopicItem>
          <TopicItemImg/>
          996
        </TopicItem>
        <TopicItem>
          <TopicItemImg/>
          京东
        </TopicItem>
        <TopicItem>
          <TopicItemImg/>
          腾讯
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic;