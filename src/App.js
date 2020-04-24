import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import PlanesPage from "./pages/Planes";
import ContactPage from "./pages/Contact";
import PlaneInfoPage from "./pages/PlaneInfo";
import SignupPage from "./pages/Signup";

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
          <Route path="/plane/:id" component={PlaneInfoPage} />
          <Route path="/signup" component={SignupPage} />
          <Footer />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
