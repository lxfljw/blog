import React from "react";
import "./app.scss";
import { Switch, HashRouter as Router, Link, Route } from "react-router-dom";
import Home from "@/pages/home";
impoer a from '../ee';
export default function App() {
  return (
    <div className="app">
      <Router>
        <Link to="/home">首页</Link>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/">
            {" "}
            <p>这是App组件!</p>
            <p>这是APP2</p>
            <p>这是APP2</p>
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </Router>
    </div>
  );
}
