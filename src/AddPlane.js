import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Layout from "./Components/Layout";
import * as yup from 'yup';
import { useFormik } from 'formik';

// https://reacttraining.com/react-router/web/example/auth-workflow

const schema = yup.object({
  name: yup.string().required(),
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  deviceId: yup.string().required(),
  tailNumber: yup.string().required(),
});

function AddPlanePage(props) {

  const formik = useFormik({
    initialValues: {
      "name": "",
      "model": "",
      "manufacturer": "",
      "deviceId": "",
      "tailNumber": "",
      "status": "active"
    },
    onSubmit: values => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      };

      console.log(JSON.stringify(values));

      fetch('https://us-central1-lonestarmeters.cloudfunctions.net/api/planes', requestOptions)
        .then(async response => {
          const data = response;

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            console.log(data);
            return Promise.reject(data);
          }

          alert("Posted!");
        })
        .catch(data => {
          console.error('There was an error!', data.statusTexty);
        });
    },
    validationSchema: schema
  });

  return (
    <Layout>
      <h1>Add Plane</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column md={2} sm={3}>Name</Form.Label>
          <Col md={10} sm={9}>
            <Form.Control
              type="text"
              name="name"
              onChange={formik.handleChange}
              isInvalid={formik.errors.name}
              placeholder="Spirit of the world"
            />
            <Form.Control.Feedback type="invalid">Enter a valid name.</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md={2} sm={3}>Tail Number</Form.Label>
          <Col md={10} sm={9}>
            <Form.Control
              type="text"
              name="tailNumber"
              onChange={formik.handleChange}
              isInvalid={formik.errors.tailNumber}
              placeholder="DL200"
            />
            <Form.Control.Feedback type="invalid">Enter a valid tail number.</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md={2} sm={3}>Model</Form.Label>
          <Col md={10} sm={9}>
            <Form.Control
              type="text"
              name="model"
              onChange={formik.handleChange}
              isInvalid={formik.errors.model}
              placeholder="777-200LR"
            />
            <Form.Control.Feedback type="invalid">Enter a valid model.</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md={2} sm={3}>Manufacturer</Form.Label>
          <Col md={10} sm={9}>
            <Form.Control
              type="text"
              name="manufacturer"
              onChange={formik.handleChange}
              isInvalid={formik.errors.manufacturer}
              placeholder="Boeing"
            />
            <Form.Control.Feedback type="invalid">Enter a valid manufacturer.</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md={2} sm={3}>Device ID</Form.Label>
          <Col md={10} sm={9}>
            <Form.Control
              type="text"
              name="deviceId"
              onChange={formik.handleChange}
              isInvalid={formik.errors.deviceId}
              placeholder="123456"
            />
            <Form.Control.Feedback type="invalid">Enter a valid device ID.</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Plane
        </Button>
      </Form>
    </Layout>
  );
}

export default AddPlanePage;