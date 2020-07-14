import React, { useState, useEffect } from "react";
import "./App.css";
import fire from "./db/app";
import firebase from "firebase";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Inbox from "./components/Inbox/index";
import Login from './components/Login/Login';
import ChatBody from "./components/Chat/ChatBody";

function App() {
  return (
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
  );
}

export default App;
