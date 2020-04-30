import React from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { toast } from 'react-toastify';

// I don't believe that formik or yup is going to 
// work nicely here, but I'm not sure.
// Hopefully I have laid the groundwork for you...

/**
 * Modal to edit the information of a plane.
 * 
 * @todo Implement data validation and submission.
 * 
 * Requires the following:
 * @param {} show - Hook to show the modal
 * @param {} onHide - Hook to hide the modal
 */
function EditPlaneModal(props) {

  function onSubmit(values) {
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'payload': values })
      };

      fetch('https://us-central1-lonestarmeters.cloudfunctions.net/api/planes', requestOptions)
        .then(async response => {
          const data = response;

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            console.log(error);
            toast.error(`Failed to edit plane ${values.tailNumber} ${values.name}.`);
            return Promise.reject(data);
          }
        })
        .catch(data => {
          console.error(data);
          toast.error(`Failed to edit plane ${values.tailNumber} ${values.name}.`);
        });
      props.onHide();

      toast.success(`Plane ${values.tailNumber} ${values.name} edited.`);
  };

  function Checkbox(props) {
    const [isChecked, setIsChecked] = React.useState(false);
    const handleClick = () => setIsChecked(!isChecked);

    return (
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          <Form.Check
            type="checkbox"
            id={`check-${props.id}`}
            label={props.name}
            isChecked={isChecked}
            onChange={handleClick}>
          </Form.Check>
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            readOnly={!isChecked}
            type="text"
            name={props.id}
            placeholder={props.placeholder}
            defaultValue={props.item}
          />
          <Form.Control.Feedback type="invalid">Enter a valid {props.name}.</Form.Control.Feedback>
        </Col>
      </Form.Group>
    );
  }

return (

  <Modal show={props.show} onHide={props.onHide}>
    <Form>
      <Modal.Header closeButton>
        <Modal.Title>Edit Plane</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Checkbox id="name" name="Name" placeholder="Spirit of the world" item={props.item.name}/>
        <Checkbox id="tailNumber" name="Tail Number" placeholder="DL200" item={props.item.tailNumber}/>
        <Checkbox id="model" name="Model" placeholder="777-200LR" item={props.item.model}/>
        <Checkbox id="manufacturer" name="Manufacturer" placeholder="Boeing" item={props.item.manufacturer}/>
        <Checkbox id="deviceId" name="Device ID" placeholder="123456" item={props.item.deviceId}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Edit Plane
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>
);
}

export default EditPlaneModal;