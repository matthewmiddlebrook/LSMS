import React from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from 'react-toastify';

function DeleteComponentModal(props) {

  function deleteComponent() {
    const requestOptions = {
      method: 'DELETE'
    };

    fetch(
      `https://us-central1-lonestarmeters.cloudfunctions.net/api/components/${props.component.id}`, requestOptions
    )
      .then(res => JSON.parse(JSON.stringify(res)))
      .then(
        result => {
          props.onHide();
          toast.success(`Component ${props.component.type} ${props.component.model} deleted.`);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
          props.onHide();
          toast.error(`Failed to delete component ${props.component.type} ${props.component.model}.`);
        }
      );
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Component</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete?
        </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={deleteComponent}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteComponentModal;