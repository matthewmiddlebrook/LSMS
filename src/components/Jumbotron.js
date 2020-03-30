import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import planecabin from "../assets/cabin2.jpg";
import styled from "styled-components";

const Styles = styled.div`
.jumbotron{
    background: url(${planecabin}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 400 px;
    z-index: -2;

}
.overlay{
    background-color: #0000;
    opacity: 0.6;
    position: absolute:
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
#button{
    background: green;
    border-color: green;
    padding: 8px;
}
#button:hover{
    background-color: #21492E;
    border-color: #21492E;
}`;

export const JumbotronHome = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Lonestar is a great business</p>
        <Button id="button">Get Started</Button>
      </Container>
    </Jumbo>
  </Styles>
);
export const JumbotronProducts = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Products</h1>
        <p>Lonestar is a great business</p>
      </Container>
    </Jumbo>
  </Styles>
);
export const JumbotronContact = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Contact Us</h1>
        <p>Lonestar is a great business</p>
      </Container>
    </Jumbo>
  </Styles>
);
export const JumbotronAbout = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>About Us</h1>
        <p>Lonestar is a great business</p>
      </Container>
    </Jumbo>
  </Styles>
);
export const JumbotronNomatch = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>ERROR 404</h1>
        <p>Lonestar is a great business</p>
      </Container>
    </Jumbo>
  </Styles>
);
