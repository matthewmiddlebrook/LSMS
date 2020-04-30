import React from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const schema = yup.object({
  manufacturerName: yup.string().required(),
  planeId: yup.string().required(),
  type: yup.string().required(),
  currentTime: yup.number().required(),
  model: yup.string().required(),
  maxTime: yup.number().required(),
  status: yup.string().required(),
});

/**
 * Modal to add a new component.
 * 
 * Requires the following:
 * @param {} id - ID of the plane
 * @param {} show - Hook to show the modal
 * @param {} onHide - Hook to hide the modal
 */
function AddComponentModal(props) {

  const formik = useFormik({
    initialValues: {
      "manufacturerName": "",
      "planeId": props.id,
      "type": "",
      "currentTime": "",
      "model": "",
      "maxTime": "",
      "status": "active"
    },
    onSubmit: values => {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'component': values })
      };

      console.log(requestOptions);

      fetch('https://us-central1-lonestarmeters.cloudfunctions.net/api/components', requestOptions)
        .then(async response => {
          const data = response;

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            console.log(error);
            toast.error(`Failed to add component ${values.type} ${values.model}.`);
            return Promise.reject(data);
          }
        })
        .catch(data => {
          console.log(data);
          toast.error(`Failed to add component ${values.type} ${values.model}.`);
        });
      props.onHide();

      toast.success(`Component ${values.type} ${values.model} created.`);
    },
    validationSchema: schema,
  });

  return (

    <Modal show={props.show} onHide={props.onHide}>
      <Form onSubmit={formik.handleSubmit}>
        <Effect
          formik={formik}
          onSubmissionError={() => toast.error('Please fill out all fields correctly.', { toastId: 'componentFormError' })}
        />
        <Modal.Header closeButton>
          <Modal.Title>Add Component</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Type</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="type"
                onChange={formik.handleChange}
                isInvalid={formik.errors.type}
                placeholder="Altimeter"
              />
              <Form.Control.Feedback type="invalid">Enter a valid type.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Manufacturer</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="manufacturerName"
                onChange={formik.handleChange}
                isInvalid={formik.errors.manufacturerName}
                placeholder="Falcon & Swift"
              />
              <Form.Control.Feedback type="invalid">Enter a valid manufacturer name.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Model</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="model"
                onChange={formik.handleChange}
                isInvalid={formik.errors.model}
                placeholder="ALTN6INF-3"
              />
              <Form.Control.Feedback type="invalid">Enter a valid model.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Current Age</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="currentTime"
                onChange={formik.handleChange}
                isInvalid={formik.errors.currentTime}
                placeholder="4362"
              />
              <Form.Control.Feedback type="invalid">Enter a valid current age.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Max Age</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="maxTime"
                onChange={formik.handleChange}
                isInvalid={formik.errors.maxTime}
                placeholder="7000"
              />
              <Form.Control.Feedback type="invalid">Enter a valid max age.</Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
        </Button>
          <Button variant="primary" type="submit">
            Add Component
        </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

function Effect(props) {
  const effect = () => {
    if (props.formik.submitCount > 0 && !props.formik.isValid) {
      props.onSubmissionError();
    }
  };
  React.useEffect(effect, [props.formik.submitCount]);
  return null;
}

export default AddComponentModal;