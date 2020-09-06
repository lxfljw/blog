import React from "react";
import "./app.scss";
// import { Switch, HashRouter as Router, Link, Route } from "react-router-dom";
// import Home from "@/pages/home";
// import Menu from "@/components/menu";
import LayoutComp from "@/components/layout";
export default function App() {
  return (
    <div className="app">
      {/* <Menu /> */}
      <div className="layout">
        <LayoutComp />
      </div>
    </div>
  );
}
