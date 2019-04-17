import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ListWrapper,
  ListInfo,
  ListImg,
  ListInfoTitle,
  ListInfoDesc,
  ListInfoOther
}
from "../style";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { listItems } = this.props;
    return (
      <div>
        {
          listItems.map((item, index) => (
            <ListWrapper key={index}>
              <ListInfo>
                <Link to="/detail">
                  <ListInfoTitle>{item.toJS().title}</ListInfoTitle>
                </Link>
                <ListInfoDesc>{item.toJS().desc.length > 60 ? item.toJS().desc.substring(0, 60) + "..." : item.toJS().desc}</ListInfoDesc>
                <ListInfoOther>
                  <span className="writer">{item.toJS().writer}</span>
                </ListInfoOther>
              </ListInfo>
              <ListImg/>
            </ListWrapper>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listItems: state.getIn(["home", "listItems"])
});

export default connect(mapStateToProps, null)(List);