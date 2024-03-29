import React, { useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Icofont from "react-icofont";
import styled from "styled-components";

import Layout from "../components/Layout";
import PlaneCard from "../components/cards/PlaneCard";
import LoadingScreen from "../components/LoadingScreen";
import AddPlaneModal from "../components/modals/AddPlane";

function PlanePlaceholder(props) {
  return (
    <div
      style={{
        width: "15em",
        flex: "auto",
        margin: "1em",
        paddingTop: "0em",
      }}
    />
  );
}

function PlanesPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "https://us-central1-lonestarmeters.cloudfunctions.net/api/planes?owner=randomGeneratedClientId"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function GetContent() {
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <LoadingScreen />;
    } else {
      return (
        <Row>
          {items.map((item) => (
            <PlaneCard item={item} key={item.id} />
          ))}
          <PlanePlaceholder />
          <PlanePlaceholder />
        </Row>
      );
    }
  }

  const Styles = styled.div`
    .body {
      padding-top: 25px;
    }
  `;

  const [show, setShow] = useState(false);
  const addModalClose = () => setShow(false);
  const addModalShow = () => setShow(true);

  return (
    <React.Fragment>
      <Styles>
        <Layout>
          <Helmet>
            <title>LSMS - Planes</title>
          </Helmet>

          <h1 style={{ display: "inline" }}>Planes</h1>
          {/* <Link to="/planes/add"> */}
          <Button style={{ float: "right" }} variant="secondary" onClick={addModalShow}>
            <Icofont icon="plus" /> Add
            </Button>
          {/* </Link> */}
          <GetContent />
          <AddPlaneModal show={show} onHide={addModalClose} />
        </Layout>
      </Styles>
    </React.Fragment>
  );
}

export default PlanesPage;
