import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Home";
import AboutPage from "./About";
import PlanesPage from "./Planes";
import PlaneInfoPage from "./PlaneInfo";

function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/planes" component={PlanesPage} />
        <Route path="/planes/:id" component={PlaneInfoPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
