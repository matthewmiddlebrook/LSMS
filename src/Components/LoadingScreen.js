import React from "react";
import { Container, Spinner } from "react-bootstrap";

const LoadingScreen = () => (
  <Container>
    <div className="text-center">
      <Spinner
        animation="border"
        role="status"
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h3>Loading</h3>
    </div>
  </Container>
);

export default LoadingScreen;
