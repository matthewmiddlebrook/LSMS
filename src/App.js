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
  { title: "Plane 1", isActive: true },
  { title: "Plane 2", isActive: false },
  { title: "Plane 3", isActive: true },
  { title: "Plane 4", isActive: true },
  { title: "Plane 5", isActive: true },
  { title: "Plane 6", isActive: false }
];

export { PLANES_DATA };
export default App;
