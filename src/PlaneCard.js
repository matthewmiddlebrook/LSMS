import React from "react";
import { Card, Badge, Modal, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import "./App.css";

function WarningModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Archive Plane?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Archiving this plane will hide it from the dashboard, but it can be
          re-enabled later.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Archive
        </Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}

function PlaneCard(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Button
      className="text-center"
      variant="light"
      style={{
        width: "15rem",
        flex: "auto",
        margin: "1rem",
        padding: "0rem",
        display: "grid",
        position: "relative",
        alignItems: "stretch",
        border: "1px solid rgba(0,0,0,.125)"
      }}
    >
      <Link
        to={`/planes/${props.item.id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <Card.Header>
          <Card.Title style={{ marginBottom: "0" }}>
            {props.item.tail} - {props.item.nickname}
          </Card.Title>
          <Badge
            variant="primary"
            style={{
              position: "absolute",
              top: "auto",
              marginTop: "4px",
              transform: "translateX(-50%)"
            }}
          >
            {props.item.type}
          </Badge>
        </Card.Header>
        <Card.Body>
          {/* <Card.Subtitle className="mb-2 text-muted">
            {PLANES_DATA[props.id].isActive ? (
            <Badge variant="primary">Active</Badge>
          ) : (
            <Badge variant="secondary">Inactive</Badge>
          )}
            <Badge variant="primary">{props.item.type}</Badge>
          </Card.Subtitle> */}
          {/* <Card.Text>This is a test.</Card.Text> */}
          {/* <LinkContainer to={`/planes/${props.item.id}`}>
          <Card.Link href="#">Info</Card.Link>
        </LinkContainer> */}
          {/* <Card.Link href="#" onClick={() => setModalShow(true)}>
          Archive
        </Card.Link> */}
          <Row>
            <Col style={{ borderRight: "1px solid #999" }}>
              <h6>Hobbs Time</h6>
              <div>4873.6</div>
            </Col>
            <Col>
              <h6>Location</h6>
              <div>Hamlin, TX</div>
            </Col>
          </Row>
        </Card.Body>
        <div style={{ height: "2.25rem" }} />
        <Card.Footer
          style={{
            background: "none",
            borderTop: "none",
            paddingTop: "0",
            position: "absolute",
            bottom: "0",
            width: "100%"
          }}
        >
          <small className="text-muted">Last active 3 months ago</small>
        </Card.Footer>

        <WarningModal show={modalShow} onHide={() => setModalShow(false)} />
      </Link>
    </Button>
  );
}

export default PlaneCard;
