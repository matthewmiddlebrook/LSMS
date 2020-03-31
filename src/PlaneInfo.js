import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Card,
  Breadcrumb,
  Tabs,
  Tab,
  Row,
  Button,
  Table,
  Alert
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams, Link } from "react-router-dom";
import Icofont from "react-icofont";

import "./App.css";

function PlaneInfoPage(props) {
  let { id } = useParams();
  const [key, setKey] = useState("overview");

  return (
    <Container>
      <Link to="/planes">
        <Button
          style={{ marginBottom: "1rem", marginRight: "1rem" }}
          variant="outline-secondary"
        >
          <Icofont icon="arrow-left" />
          Back
        </Button>
      </Link>
      <h2 style={{ display: "inline" }}>Nickname of Plane</h2>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="overview" title="Overview">
          <OverviewTab />
        </Tab>
        <Tab eventKey="components" title="Components">
          <ComponentsTab />
        </Tab>
        <Tab eventKey="changes" title="Changes">
          <ChangesTab />
        </Tab>
        <Tab eventKey="locations" title="Locations">
          <LocationsTab />
        </Tab>
      </Tabs>
    </Container>
  );
}

function InfoCard(props) {
  return (
    <Card bg="light" text="dark" style={{ width: "12rem", margin: "1rem" }}>
      <Card.Body>
        <Icofont icon={props.icon} />
        <Card.Text />
        <Card.Subtitle>{props.title}</Card.Subtitle>
      </Card.Body>
      <Card.Footer style={{ background: "none", borderTop: "none" }}>
        <Card.Title>{props.info}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant="warning"
        style={{ marginTop: "1rem", marginBottom: "0rem" }}
        onClose={() => setShow(false)}
        dismissible
      >
        <b>Component 1</b> needs to be checked on soon.
      </Alert>
    );
  }
  return null;
}

function OverviewTab() {
  return (
    <Container>
      <AlertDismissibleExample />
      <Row>
        <InfoCard title="Type" icon="info" info="777-200LR" />
        <InfoCard title="Hobbs" icon="speed-meter" info="4873.0" />
        <InfoCard
          title="Tracked Components"
          icon="eye"
          info="3"
          page="components"
        />
        <InfoCard title="Last Active" icon="clock-time" info="3 months ago" />
        <InfoCard
          title="Location"
          icon="location-pin"
          info="32.4708728, -99.7094551"
        />
      </Row>
    </Container>
  );
}

function ComponentsTab() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Component Type</th>
          <th>Name/Model</th>
          <th>Current Age</th>
          <th>Maximum Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Component Type</td>
          <td>Name and Model</td>
          <td>Current Age</td>
          <td>Max Age</td>
        </tr>
      </tbody>
    </Table>
  );
}

function ChangesTab() {
  return <h1>Changes</h1>;
}

function LocationsTab() {
  return <h1>Locations</h1>;
}

export default PlaneInfoPage;
