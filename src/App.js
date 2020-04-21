import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Home";
import AboutPage from "./About";
import LoginPage from "./Login";
import PlanesPage from "./Planes";
import AddPlanePage from "./AddPlane";
import PlaneInfoPage from "./PlaneInfo";

function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingTop: "5em", paddingBottom: "2em" }}>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/planes" component={PlanesPage} />
        <Route path="/planes/add" component={AddPlanePage} />
        <Route path="/plane/:id" component={PlaneInfoPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
