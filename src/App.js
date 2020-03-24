import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import HomePage from "./Home";
import AboutPage from "./About";
import PlanesPage from "./Planes";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/planes" component={PlanesPage} />
    </div>
  </Router>
);

export default App;
