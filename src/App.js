import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Components/Layout";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Home";
import Products from "./Products";
import AboutPage from "./About";
import LoginPage from "./Login";
import PlanesPage from "./Planes";
import AddPlanePage from "./AddPlane";
import ContactPage from "./ContactPage";
import PlaneInfoPage from "./PlaneInfo";
import SignupPage from "./Signup";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div style={{ paddingTop: "4em", paddingBottom: "0em" }}>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/planes" component={PlanesPage} />
          <Route path="/planes/add" component={AddPlanePage} />
          <Route path="/plane/:id" component={PlaneInfoPage} />
          <Route path="/signup" component={SignupPage} />
          <Footer />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
