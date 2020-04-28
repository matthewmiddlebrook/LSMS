import React, { useState, useEffect } from "react";
import { Card, Badge, Button, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";

// import WarningModal from "./WarningModal";

/**
 * Card for each plane on the Planes dashboard.
 * 
 * Quickly shows information about the plane.
 * @param {} props Requires the following:
 * - item - Plane object
 */
function PlaneCard(props) {
  // const [modalShow, setModalShow] = React.useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locationName, setLocationName] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // This uses the api key from the .env file you should have created
    // Refer to the documentation on GitHub for more information about this
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${props.item.lastGPS._longitude},${props.item.lastGPS._latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_KEY}`
      + '&types=place'
      + '&country=US'
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setLocationName(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  /**
   * Tooltip that shows when you hover over the name of a location to show the coordinates
   * @param {} props Requires the following:
    * - tooltip - text for the tooltip
   */
  function CardTooltip(props) {
    return (
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip" {...props}>
          {props.tooltip}
        </Tooltip>}
      >
        <div>{props.children}</div>
      </OverlayTrigger>
    )
  }

  /**
   * Gets the name of the location for this card
   * @todo This needs better error catching
   */
  function GetLocationName() {
    if (error) {
      console.log(error);
      return <div>Error</div>;
    } else if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      console.log(locationName);
      // If there is a valid name for this location,
      // i.e., it's in a city instead of the ocean
      if (locationName.length !== 0 && locationName.features.length !== 0) {
        return (
          <CardTooltip tooltip={`${props.item.lastGPS._latitude}, ${props.item.lastGPS._longitude}`}>
            {locationName.features[0].text}, {locationName.features[0].context[0].text}
          </CardTooltip>
        )
      } else {
        return (
          <CardTooltip tooltip={`${props.item.lastGPS._latitude}, ${props.item.lastGPS._longitude}`}>
            N/A
          </CardTooltip>
        )
      }
    }
  }

  return (
    <Button
      className="text-center"
      variant="light"
      style={{
        width: "15em",
        flex: "auto",
        margin: "1em",
        padding: "0em",
        display: "grid",
        position: "relative",
        alignItems: "stretch",
        border: "1px solid rgba(0,0,0,.125)"
      }}
    >
      {/* <Link> is used for routing instead of <a> */}
      {/* It's inside so it doesn't mess with formatting */}
      <Link
        to={{
          pathname: `/plane/${props.item.id}/overview`,
          state: { item: props.item }
        }}
        // Fixes the button from highlighting blue
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <Card.Header>
          <Card.Title style={{ marginBottom: "0" }}>
            {props.item.tailNumber} - {props.item.name}
          </Card.Title>
          {/* The badge is shifted a bit so it appears on the divider */}
          <Badge
            variant="primary"
            style={{
              position: "absolute",
              top: "auto",
              marginTop: "4px",
              transform: "translateX(-50%)"
            }}
          >
            {props.item.model}
          </Badge>
        </Card.Header>
        <Card.Body>
          {/* A line is added on the first column as a separator */}
          <Row>
            <Col style={{ borderRight: "1px solid #999" }}>
              <h6>Hobbs Time</h6>
              <div>{props.item.hobbsTime}</div>
            </Col>
            <Col>
              <h6>Location</h6>
              <div>
                <GetLocationName />
              </div>
            </Col>
          </Row>
        </Card.Body>
        <div style={{ height: "2.25em" }} />
        <Card.Footer
          style={{
            background: "none",
            borderTop: "none",
            paddingTop: "0",
            position: "absolute",
            bottom: "0",
            width: "100%"
          }}
        >
          <small className="text-muted">
            Last active{" "}
            {/* Moment is a nice package that shows text readable dates */}
            {/* There's strange math going on here cause of the way Tendai formatted the Timestamp */}
            <Moment fromNow unix>
              {props.item.lastActiveTime._seconds +
                props.item.lastActiveTime._nanoseconds / 1000000000}
            </Moment>
          </small>
        </Card.Footer>

        {/* <WarningModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      </Link>
    </Button>
  );
}

export default PlaneCard;
