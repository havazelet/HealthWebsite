import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Blog from "./components/Blog";
import Aboutus from "./components/Aboutus";
import Forum from "./components/Forum";

export default () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Blog}/>

          <Route path="/home">
            <Blog />
          </Route>

          <Route path="/quiz">
            <Quiz />
          </Route>

          <Route path="/forum">
            <Forum />
          </Route>

          <Route path="/about">
            <Aboutus />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
