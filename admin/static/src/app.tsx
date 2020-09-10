import React from "react";
import "./app.scss";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
// import Home from "@/pages/home";
// import LayoutComp from "@/components/layout";
import Login from "@/pages/login";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
      {/* <div className="layout">
        <LayoutComp />
      </div> */}
    </div>
  );
}
