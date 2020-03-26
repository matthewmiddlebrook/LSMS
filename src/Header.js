import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="md" fixed="top">
    <LinkContainer to="/">
      <Navbar.Brand>LoneStar Meter Solutions</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/planes">
          <Nav.Link>Planes</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Stuff" id="basic-nav-dropdown">
          <LinkContainer to="/p1">
            <NavDropdown.Item>Subpage 1</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/p2">
            <NavDropdown.Item>Subpage 2</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/p3">
            <NavDropdown.Item>Subpage 3</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
