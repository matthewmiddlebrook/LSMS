import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingScreen = () => (
  <div className="text-center">
    <Spinner
      animation="border"
      role="status"
      style={{ marginTop: "4em", marginBottom: "2em" }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
    <h3>Loading</h3>
  </div>
);

export default LoadingScreen;
