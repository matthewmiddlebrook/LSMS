import React from "react";
import { Home } from "./Home";
import { Products } from "./Products";
import { About } from "./About";
import { Login } from "./Login";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import { Form } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />

          <Route exact path="/about" component={About} />

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
