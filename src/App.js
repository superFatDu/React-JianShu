import React, { Component } from 'react';
import { GlobalStyle } from "./style";
import { FontGlobal } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <FontGlobal />
          <Header/>
        </div>
      </Provider>
    );
  }
}

export default App;
