import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function ComponentAlert() {
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

export default ComponentAlert;
