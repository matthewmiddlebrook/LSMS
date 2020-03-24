import React from "react";

import { Container, CardDeck } from "react-bootstrap";

import "./App.css";
import PlaneCard from "./PlaneCard";

function PlanesPage() {
  return (
    <Container>
      <h1>Planes</h1>
      <CardDeck>
        <PlaneCard name="Plane 1" isActive={true}/>
        <PlaneCard name="Plane 2" isActive={false}/>
      </CardDeck>
    </Container>
  );
}

export default PlanesPage;
