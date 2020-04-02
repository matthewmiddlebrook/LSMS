import React from "react";
import { Card } from "react-bootstrap";
import Icofont from "react-icofont";

function PlaneOverviewCard(props) {
  return (
    <Card bg="light" text="dark" style={{ width: "12rem", margin: "1rem" }}>
      <Card.Body>
        <Icofont icon={props.icon} />
        <Card.Text />
        <Card.Subtitle>{props.title}</Card.Subtitle>
      </Card.Body>
      <Card.Footer style={{ background: "none", borderTop: "none" }}>
        <Card.Title>{props.info}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default PlaneOverviewCard;
