import React from "react";
import { Container, Row } from "react-bootstrap";
import Moment from "react-moment";

import PlaneOverviewCard from "../PlaneOverviewCard";
import ComponentAlert from "../ComponentAlert";

function PlaneOverviewCardPlaceholder(props) {
  return (
    <div
      style={{
        width: "12em",
        flex: "auto",
        margin: "1em",
        padding: "0em"
      }}
    />
  );
}

function OverviewTab(props) {
  console.log(props.item);
  return (
    <Container>
      {/* <ComponentAlert /> */}
      <Row style={{ display: "flex" }}>
        <PlaneOverviewCard title="Type" icon="info" info={props.item.model} />
        <PlaneOverviewCard title="Hobbs" icon="speed-meter" info={props.item.hobbsTime} />
        <PlaneOverviewCard
          title="Tracked Components"
          icon="eye"
          info={props.item.components.length}
          setKey={props.setKey}
          tab="components"
        />
        <PlaneOverviewCard
          title="Last Active"
          icon="clock-time"
          info={<Moment fromNow unix>
            {props.item.lastActiveTime._seconds +
              props.item.lastActiveTime._nanoseconds / 1000000000}
          </Moment>}
        />
        <PlaneOverviewCard
          title="Location"
          icon="location-pin"
          info={`${props.item.lastGPS._latitude}, ${props.item.lastGPS._longitude}`}
          setKey={props.setKey}
          tab="locations"
        />
        <PlaneOverviewCardPlaceholder />
        <PlaneOverviewCardPlaceholder />
        <PlaneOverviewCardPlaceholder />
      </Row>
    </Container>
  );
}

export default OverviewTab;
