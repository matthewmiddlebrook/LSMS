import React from "react";
import { Modal, Button } from "react-bootstrap";

// THIS IS CURRENTLY UNUSED

/**
 * A modal to archive a plane.
 * 
 * Requires the following:
 * @param {} show - Hook to show the modal
 * @param {} onHide - Hook to hide the modal
 */
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

export default WarningModal;
