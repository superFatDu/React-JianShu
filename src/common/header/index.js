import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchSwitch,
  SearchInfoItem,
  SearchWrapper
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as actionLogCreators } from "../../pages/login/store";

class Header extends Component {
  render() {
    const getListArea = (show) => {
      const { recommendList, pageNum, pageTotal, handleSearchMouseEnter, handleSearchMouseLeave, handleSwitchList, mouseIn } = this.props;
      const temptRecommendList = recommendList.toJS();
      const tempList = [];
      if (temptRecommendList.length) {
        for (let i = (pageNum - 1) * 10; i < pageNum * 10; i++) {
          if (temptRecommendList[i]) {
            tempList.push(
              <SearchInfoItem key={temptRecommendList[i]}>{temptRecommendList[i]}</SearchInfoItem>
            )
          }
        }
      }
      if (show || mouseIn) {
        return (
          <SearchInfo
            onMouseEnter={handleSearchMouseEnter}
            onMouseLeave={handleSearchMouseLeave}
          >
            <SearchInfoTitle>
              热门搜索
              <SearchSwitch onClick={() => handleSwitchList(pageNum, pageTotal, this.spin)}>
                <i ref={(i) => {this.spin = i}} className="iconfont spin">&#xe7b1;</i>
                换一批
              </SearchSwitch>
            </SearchInfoTitle>
            <div>
              {
                tempList
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
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {/*<Link to={{pathname: "/login"}}>
            <NavItem className="right">登录</NavItem>
          </Link>*/}
          {
            this.props.loginStatus
              ? <NavItem className="right" onClick={this.props.handleLogout}>退出</NavItem>
              : <Link to={{pathname: "/login"}}><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "search-focused" : ""}
                onFocus={() => this.props.handleSearchFocus(this.props.recommendList)}
                onBlur={this.props.handleSearchBlur}
              />
            </CSSTransition>
            <i
              className={this.props.focused ? "search-focused iconfont search-icon" : "iconfont search-icon"}
            >&#xe623;</i>
            {getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="write"><i className="iconfont">&#xe62d;</i>写文章</Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    recommendList: state.getIn(["header", "recommendList"]),
    pageNum: state.getIn(["header", "pageNum"]),
    pageTotal: state.getIn(["header", "pageTotal"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    loginStatus: state.getIn(["login", "logStatus"])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus(list) {
      console.log(list.size);
      (list.size === 0) && dispatch(actionCreators.handleRecommendList());
      dispatch(actionCreators.handleSearchFocus());
    },
    handleSearchBlur() {
      dispatch(actionCreators.handleSearchBlur());
    },
    handleSearchMouseEnter() {
      dispatch(actionCreators.handleSearchMouseEnter())
    },
    handleSearchMouseLeave() {
      dispatch(actionCreators.handleSearchMouseLeave())
    },
    handleSwitchList(pageNum, pageTotal, spin) {
      let rotateAngle = spin.style.transform.replace(/[^0-9]/ig, "");
      if (rotateAngle) {
        rotateAngle = parseInt(rotateAngle, 10);
      } else {
        rotateAngle = 0;
      }
      rotateAngle += 360;
      spin.style.transform = 'rotate('+rotateAngle+'deg)';
      console.log(spin.style);
      if (pageNum < pageTotal) {
        dispatch(actionCreators.handleSwitchList(++pageNum));
      } else {
        dispatch(actionCreators.handleSwitchList(1));
      }
    },
    handleLogout() {
      dispatch(actionLogCreators.handleLogout());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);