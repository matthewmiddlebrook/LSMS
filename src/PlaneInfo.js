import React, { useState } from "react";
import { Container, Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";

import ChangesTab from "./Components/Tabs/ChangesTab";
import LocationsTab from "./Components/Tabs/LocationsTab";
import ComponentsTab from "./Components/Tabs/ComponentsTab";
import OverviewTab from "./Components/Tabs/OverviewTab";

function PlaneInfoPage(props) {
  const [key, setKey] = useState("overview");

  const item = props.location.state.item;

  return (
    <Container>
      <Row style={{ marginBottom: "1rem" }}>
        <Col md="auto" xs={{ span: "6" }}>
          <Link to="/planes">
            <Button variant="outline-secondary">
              <Icofont icon="arrow-left" /> Back
            </Button>
          </Link>
        </Col>
        <Col md={{ span: true }} xs={{ order: 2, span: "auto" }}>
          <h2 style={{ display: "inline" }}>{item.name}</h2>
        </Col>
        <Col md={{ order: 2, span: "auto" }} xs={{ order: 1, span: "6" }}>
          <Link to="/planes">
            <Button style={{ float: "right" }} variant="outline-secondary">
              <Icofont icon="gear" /> Settings
            </Button>
          </Link>
        </Col>
      </Row>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
        mountOnEnter
      >
        <Tab eventKey="overview" title="Overview">
          <OverviewTab />
        </Tab>
        <Tab eventKey="components" title="Components">
          <ComponentsTab item={item} />
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

export default PlaneInfoPage;
