import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Icofont from "react-icofont";
import styled from "styled-components";

import Layout from "./Components/Layout";
import PlaneCard from "./Components/PlaneCard";
import LoadingScreen from "./Components/LoadingScreen";

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
        </Row>
      );
    }
  }

  const Styles = styled.div`
    .body {
      padding-top: 25px;
    }
  `;

  return (
    <React.Fragment>
      <Styles>
        <div style={{ marginTop: "30px" }}></div>
        <Layout>
          <Helmet>
            <title>LSMS - Planes</title>
          </Helmet>

          <h1 style={{ display: "inline" }}>Planes</h1>
          <Link to="/planes/add">
            <Button style={{ float: "right" }} variant="outline-secondary">
              <Icofont icon="plus" /> Add
            </Button>
          </Link>
          <GetContent />
        </Layout>
      </Styles>
    </React.Fragment>
  );
}

export default PlanesPage;
