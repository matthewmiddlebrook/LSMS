import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import Icofont from "react-icofont";

function PlaneOverviewCard(props) {
  console.log(props);

  function handleChange(event) {
    if ((props.setKey != null) & (props.tab != null)) {
      props.setKey(props.tab);
    }
  }

  return (
    <Button
      onClick={handleChange}
      className="text-left"
      variant="light"
      text="dark"
      style={{
        width: "12em",
        flex: "auto",
        margin: "1em",
        padding: "0em",
        display: "grid",
        position: "relative",
        alignItems: "stretch",
        border: "1px solid rgba(0,0,0,.125)",
      }}
    >
      <Card.Body>
        <Row>
          <Col>
            <Icofont icon={props.icon} />
            <Card.Subtitle style={{ paddingTop: "1em" }}>
              {props.title}
            </Card.Subtitle>
          </Col>
          <Col className="d-sm-none" style={{ alignSelf: "flex-end" }}>
            <Card.Title style={{ marginBottom: "0" }}>{props.info}</Card.Title>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer
        className="d-none d-sm-block"
        style={{ background: "none", borderTop: "none" }}
      >
        <Card.Title>{props.info}</Card.Title>
      </Card.Footer>
    </Button>
  );
}

export default PlaneOverviewCard;
