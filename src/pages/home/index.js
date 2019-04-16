import React, { Component } from "react";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  HomeLeftBanner
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <HomeLeftBanner/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;