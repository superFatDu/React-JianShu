import React, { Component } from 'react';
import { GlobalStyle, RouteStyle } from "./style";
import { FontGlobal } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Write from "./pages/write";
import store from "./store"

class App extends Component {
  render() {
    const providerStyle = {
      width: "100%",
      height: "100%"
    };
    return (
      <Provider store={store}>
        <div style={providerStyle}>
          <GlobalStyle />
          <FontGlobal />
          <BrowserRouter>
            <RouteStyle>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
            </RouteStyle>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
