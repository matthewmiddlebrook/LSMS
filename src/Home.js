import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";

const HomePage = () => (
  <Container fluid>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <LinkContainer to="/planes">
          <Button variant="primary">Plane Dashboard</Button>
        </LinkContainer>
      </p>
    </Jumbotron>
  </Container>
);

export default HomePage;
