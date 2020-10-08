import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import router from "@/router";
export default function Content() {
  return (
    <Router>
      <Switch>
        {router.map((route) => (
          <Route key={route.key} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
}
