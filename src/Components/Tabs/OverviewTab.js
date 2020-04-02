import React from "react";
import { Container, Row } from "react-bootstrap";

import PlaneOverviewCard from "../PlaneOverviewCard";
import ComponentAlert from "../ComponentAlert";

function OverviewTab() {
  return (
    <Container>
      <ComponentAlert />
      <Row style={{}}>
        <PlaneOverviewCard title="Type" icon="info" info="777-200LR" />
        <PlaneOverviewCard title="Hobbs" icon="speed-meter" info="4873.0" />
        <PlaneOverviewCard
          title="Tracked Components"
          icon="eye"
          info="3"
          page="components"
        />
        <PlaneOverviewCard
          title="Last Active"
          icon="clock-time"
          info="3 months ago"
        />
        <PlaneOverviewCard
          title="Location"
          icon="location-pin"
          info="32.4708728, -99.7094551"
        />
      </Row>
    </Container>
  );
}

export default OverviewTab;
