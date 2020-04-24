import React from "react";
import { Container } from "react-bootstrap";

const Layout = (props) => <Container style={{paddingTop: "1em"}}>{props.children}</Container>;

export default Layout;
