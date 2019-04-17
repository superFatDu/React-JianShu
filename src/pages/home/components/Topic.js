import React, { Component } from "react";
import {
  TopicWrapper,
  TopicItem,
  TopicItemImg
}
from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map(item => (
            <TopicItem key={item}>
              <TopicItemImg/>
              {item}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
  componentDidMount() {
    this.props.getTopicList();
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicList() {
      dispatch(actionCreators.handleTopicList());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);