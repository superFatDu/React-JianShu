import React, { Component } from "react";
import Header from "../../common/header";
import {
  DetailOuter,
  DetailWrapper,
  HeaderTitle
}
from "./style";

class Detail extends Component {
  render() {
    return (
      <DetailOuter>
        <Header/>
        <DetailWrapper>
          <HeaderTitle>60 余家免费正版图片网站，应该是目前最全的的集合了</HeaderTitle>
        </DetailWrapper>
      </DetailOuter>
    )
  }
}

export default Detail;