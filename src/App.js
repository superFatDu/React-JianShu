import React, { Component } from 'react';
import { GlobalStyle, RouteStyle } from "./style";
import { FontGlobal } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
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
          <BrowserRouter>
            <RouteStyle>
              <Route path="/" exact component={Home}>

              </Route>
              <Route path="/detail" exact component={Detail}>

              </Route>
            </RouteStyle>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
