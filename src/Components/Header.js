import React from "react";
import { NavLink, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #2a77af;
    padding: 20px;
  }

  .navbar-brand,
  navbar-nav,
  nav-link {
    color: white;
    font-size: 30px;
    &:hover {
      color: black;
    }
  }

  .nav-link-ltr:hover::before {
    width: 100%;
  }
  .nav-link {
    font-size: 18px;
    position: relative;
    color: white;
  }

  @media (min-width: 867px) {
    .nav-link {
      float: left;
      align-items: center;
    }
  }
  @media (max-width: 867px) {
    .nav-link {
      align-items: center;
      text-align: center;
    }
  }
  .nav-link:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: #031d44;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  .nav-link:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
  .mr-auto {
    float: right;
  }
`;

const Header = () => (
  <Styles>
    <Navbar expand="md" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            LoneStar Meter Solutions
          </Link>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/"}>
              Home
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item style={{ float: "right" }}>
            <NavLink className="nav-link" exact to={"/products"}>
              Products
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/planes"}>
              Planes
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/about"}>
              About
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/contact"}>
              Contact
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/login"}>
              Login
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
export default Header;
