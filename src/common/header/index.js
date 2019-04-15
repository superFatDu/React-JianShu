import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchSwitch, SearchInfoItem, SearchWrapper } from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Header extends Component {
  render() {
    const getListArea = (show) => {
      if (show) {
        return (
          <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchSwitch>换一批</SearchSwitch>
            </SearchInfoTitle>
            <div>
              {
                this.props.recommendList.map((item, index) => {
                  return (
                    <SearchInfoItem key={index}>{item}</SearchInfoItem>
                  )
                })
              }
            </div>
          </SearchInfo>
        )
      } else {
        return null;
      }
    };
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "search-focused" : ""}
                onFocus={this.props.handleSearchFocus}
                onBlur={this.props.handleSearchBlur}
              />
            </CSSTransition>
            <i
              className={this.props.focused ? "search-focused iconfont" : "iconfont"}
            >&#xe623;</i>
            {getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="write"><i className="iconfont">&#xe62d;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"]),
    recommendList: state.getIn(["header", "recommendList"])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus() {
      dispatch(actionCreators.handleSearchFocus());
      dispatch(actionCreators.handleRecommendList());

    },
    handleSearchBlur() {
      dispatch(actionCreators.handleSearchBlur());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);