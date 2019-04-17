import React, { Component } from "react";
import Header from "../../common/header";
import {
  HomeOuter,
  HomeWrapper,
  HomeLeft,
  HomeRight,
  HomeLeftBanner,
  HomeFooter
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

class Home extends Component {
  render() {
    return (
      <HomeOuter>
        <Header/>
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
        <HomeFooter>
          Made&nbsp;&nbsp;with&nbsp;<span className="love_img"></span>&nbsp;by&nbsp;&nbsp;superFatDu
        </HomeFooter>
      </HomeOuter>
    )
  }
}

export default Home;