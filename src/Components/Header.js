import React from "react";
import { NavLink, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="md" fixed="top">
    <LinkContainer to="/">
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          LoneStar Meter Solutions
        </Link>
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Item>
          <NavLink className="nav-link" exact to={"/"}>
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to={"/planes"}>
            Planes
          </NavLink>
        </Nav.Item>
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
        <Nav.Item>
          <NavLink className="nav-link" exact to={"/about"}>
            About
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" exact to={"/contact"}>
            Contact
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
