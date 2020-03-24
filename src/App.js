import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import HomePage from "./Home";
import AboutPage from "./About";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  </Router>
);

export default App;
