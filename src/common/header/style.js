import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  width: 100px;
  height: 56px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 70px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
 
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  &:hover {
    cursor: pointer;
  }
  .iconfont {
    font-size: 20px;
    vertical-align: middle;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    font-size: 16px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 28px;
    line-height: 28px;
    border-radius: 50%;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
    &.search-focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  font-size: 14px;
  color: #666;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 15px;
  box-sizing: border-box;
  padding: 0 30px 0 20px;
  &::placeholder {
    color: #999;
  }
  &.search-focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
font-size: 14px;
  float: right;
  line-height: 38px;
  margin-right: 20px;
  padding: 0 20px;
  margin-top: 9px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.write {
    background: #ec6149;
    color: #fff;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 10px;
  top: 56px;
  width: 250px;
  box-sizing: border-box;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  &::after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: -7px;
    left: 15px;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchSwitch  = styled.span`
  float: right;
  font-size: 13px;
`;

export const SearchInfoItem = styled.a`
  display: inline-block;
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 15px;
`;