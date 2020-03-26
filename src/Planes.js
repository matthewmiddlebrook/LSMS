import React from "react";

import { Container, Row } from "react-bootstrap";

import "./App.css";
import PlaneCard from "./PlaneCard";

function PlanesPage() {
  return (
    <Container>
      <h1>Planes</h1>
      <Row>
        <PlaneCard id={0} />
        <PlaneCard id={1} />
        <PlaneCard id={2} />
        <PlaneCard id={3} />
        <PlaneCard id={4} />
        <PlaneCard id={5} />
      </Row>
    </Container>
  );
}

export default PlanesPage;
