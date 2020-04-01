import React from "react";

import { Container, Row } from "react-bootstrap";

import "./App.css";
import { PLANES_DATA } from "./App";
import PlaneCard from "./PlaneCard";

function PlanePlaceholder(props) {
  return (
    <div
      style={{
        width: "15rem",
        flex: "auto",
        margin: "1rem",
        padding: "0rem"
      }}
    />
  );
}

function PlanesPage() {
  return (
    <Container>
      <h1>Planes</h1>
      <Row>
        {PLANES_DATA.map(item => (
          <PlaneCard item={item} key={item.id} />
        ))}
        <PlanePlaceholder />
      </Row>
    </Container>
  );
}

export default PlanesPage;
