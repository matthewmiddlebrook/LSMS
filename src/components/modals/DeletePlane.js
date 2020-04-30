import React from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from 'react-toastify';

/**
 * Modal to delete a plane.
 * 
 * Requires the following:
 * @param {} item - Data of the plane
 * @param {} show - Hook to show the modal
 * @param {} onHide - Hook to hide the modal
 */
function DeletePlaneModal(props) {

  function deletePlane() {
    const requestOptions = {
      method: 'DELETE'
    };

    fetch(
      `https://us-central1-lonestarmeters.cloudfunctions.net/api/planes/${props.item.id}`, requestOptions
    )
      .then(res => JSON.parse(JSON.stringify(res)))
      .then(
        result => {
          props.onHide();
          toast.success(`Plane ${props.item.name} ${props.item.tailNumber} deleted.`);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
          props.onHide();
          toast.error(`Failed to delete plane ${props.item.name} ${props.item.tailNumber}.`);
        }
      );
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete this plane?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      This action cannot be undone. This will <b>permanently</b> delete the <b>{props.item.name} {props.item.tailNumber}</b> plane, and all associated components, changes, and location history.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={deletePlane}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePlaneModal;