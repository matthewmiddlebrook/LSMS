import React from "react";
import { Container, Nav, Navbar, Card, Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useParams } from "react-router-dom";

import "./App.css";

import { PLANES_DATA } from "./App";

function PlaneInfoPage() {
  let { id } = useParams();

  return (
    <Container>
      <Breadcrumb>
        <LinkContainer to={"/planes"}>
          <Breadcrumb.Item>Planes</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>{PLANES_DATA[id].title}</Breadcrumb.Item>
      </Breadcrumb>

      <h1>{PLANES_DATA[id].title}</h1>
    </Container>
  );
}

export default PlaneInfoPage;
