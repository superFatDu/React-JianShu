import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect, Link } from "react-router-dom";

import { LoginWrapper, LoginLogo, LoginForm, Input, Button } from "./style";

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <Link to="/">
            <LoginLogo/>
          </Link>
          <LoginForm>
            <Input type="text" placeholder="用户名" ref={(account) => this.account = account}/>
            <Input type="password" placeholder="密码" ref={(pwd) => this.pwd = pwd}/>
            <Button onClick={() => this.props.handleSubmit(this.account, this.pwd)}>登录</Button>
          </LoginForm>
        </LoginWrapper>
      )
    } else {
      return (<Redirect to="/" />)
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "logStatus"])
});

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(pwdEle, accountEle) {
      dispatch(actionCreators.handleLogin(pwdEle.value, accountEle.value));
    }
  }
};

export default connect(mapState, mapDispatch)(Login);