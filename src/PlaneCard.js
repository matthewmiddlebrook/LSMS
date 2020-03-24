import React from "react";

import { Card, Badge, Modal, Button } from "react-bootstrap";

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
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.isActive ? (
            <Badge variant="primary">Active</Badge>
          ) : (
            <Badge variant="secondary">Inactive</Badge>
          )}
        </Card.Subtitle>
        <Card.Text>This is a test.</Card.Text>
        <Card.Link href="#">Info</Card.Link>
        <Card.Link href="#" onClick={() => setModalShow(true)}>
          Archive
        </Card.Link>
      </Card.Body>

      <WarningModal show={modalShow} onHide={() => setModalShow(false)} />
    </Card>
  );
}

export default PlaneCard;
