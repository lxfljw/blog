import React from "react";
import "./app.scss";
import {
  Switch,
  HashRouter as Router,
  // Route,
  // Redirect,
} from "react-router-dom";
// import Home from "@/pages/home";
import LayoutComp from "@/components/layout";
// import Login from "@/pages/login";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* <Route path="/" exact component={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} /> */}
        </Switch>
      </Router>
      <div className="layout">
        <LayoutComp />
      </div>
    </div>
  );
}
