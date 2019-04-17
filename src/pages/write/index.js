import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Write extends PureComponent {
  render() {
    if (this.props.loginStatus) {
      return (
        <div>写文章页面</div>
      )
    } else {
      return (<Redirect to="/login" />)
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "logStatus"])
});

export default connect(mapState, null)(Write);