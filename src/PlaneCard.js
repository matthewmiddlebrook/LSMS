import React from "react";
import { Card, Badge, Modal, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";

import { PLANES_DATA } from "./App";

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
    <Card
      className="text-center"
      style={{ width: "18rem", margin: "1rem", flex: "auto" }}
    >
      <Card.Body>
        <Card.Title>
          {PLANES_DATA[props.id].tail} - {PLANES_DATA[props.id].nickname}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {/* {PLANES_DATA[props.id].isActive ? (
            <Badge variant="primary">Active</Badge>
          ) : (
            <Badge variant="secondary">Inactive</Badge>
          )} */}
          <Badge variant="primary">{PLANES_DATA[props.id].type}</Badge>
        </Card.Subtitle>
        {/* <Card.Text>This is a test.</Card.Text> */}
        <LinkContainer to={`/planes/${props.id}`}>
          <Card.Link href="#">Info</Card.Link>
        </LinkContainer>
        {/* <Card.Link href="#" onClick={() => setModalShow(true)}>
          Archive
        </Card.Link> */}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last active 3 mins ago</small>
      </Card.Footer>

      <WarningModal show={modalShow} onHide={() => setModalShow(false)} />
    </Card>
  );
}

export default PlaneCard;
