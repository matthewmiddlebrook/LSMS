import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import HomePage from "./Home";
import AboutPage from "./About";
import PlanesPage from "./Planes";
import PlaneInfoPage from "./PlaneInfo";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/planes" component={PlanesPage} />
        <Route path="/planes/:id" component={PlaneInfoPage} />
      </div>
    </Router>
  );
}

var PLANES_DATA = [
  {
    id: 0,
    tail: "DL200",
    type: "777-200LR",
    nickname: "Spirit of the World",
    isActive: true
  },
  {
    id: 1,
    tail: "N594FY",
    type: "Denali",
    nickname: "Red Dragon",
    isActive: true
  }
];

export { PLANES_DATA };
export default App;
