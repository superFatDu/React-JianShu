import React, { Component } from "react";
import {
  RecommendItem
}
from "../style";

class Recommend extends Component {
  render() {
    return (
      <div>
        <RecommendItem className="hot7">7日热门 ></RecommendItem>
        <RecommendItem className="hot30">30日热门 ></RecommendItem>
        <RecommendItem className="good-ser">优选连载 ></RecommendItem>
        <RecommendItem className="js-copy">简书版权 ></RecommendItem>
        <RecommendItem className="js-class">简书大学堂 ></RecommendItem>
      </div>
    )
  }
}

export default Recommend;