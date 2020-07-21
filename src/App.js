import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Inbox from "./components/Inbox/index";
import Login from './components/Login/Login';
import ChatBody from "./components/Chat/ChatBody";

import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/inbox" component={Inbox} />
            <Route
              exact
              path="/chat"
              component={ChatBody}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
