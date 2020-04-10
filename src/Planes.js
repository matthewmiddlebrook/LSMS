import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Helmet } from 'react-helmet';
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
        padding: "0em"
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
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
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

  function GetContent() {
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <LoadingScreen />;
    } else {
      return (
        <Row>
          {items.map(item => (
            <PlaneCard item={item} key={item.id} />
          ))}
          <PlanePlaceholder />
        </Row>
      );
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>LSMS - Planes</title>
      </Helmet>
      <h1>Planes</h1>
      <GetContent />
    </Layout>
  );
}

export default PlanesPage;
