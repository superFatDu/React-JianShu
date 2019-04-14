import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWapper = styled.div`
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
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 15px;
  box-sizing: border-box;
  padding: 0 20px;
  &::placeholder {
    color: #999;
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
`;