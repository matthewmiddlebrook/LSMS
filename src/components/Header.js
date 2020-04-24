import React from "react";
import { NavLink, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #2a77af;
    // padding: 20px;
  }

  .navbar-brand {
    color: white;
    // font-size: 30px;
  }

  .nav-link, 
  .dropdown-item {
    position: relative;
  }

  .dropdown-menu, 
  .dropdown-item, 
  .dropdown-item.active {
    background-color: #2975ab;
  }

  .navbar-light .navbar-nav .nav-link, 
  .dropdown-item, 
  .navbar-text  {
    // font-size: 18px;
    color: white;
  }

  .navbar-light .navbar-nav .active {
    font-weight: bold;
  }

  .navbar-light .navbar-nav .active:before {
    visibility: visible;
    transform: scaleX(.8);
  }

  .nav-link:before, 
  .dropdown-item:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  
  .nav-link:hover:before, 
  .dropdown-item:hover:before {
    visibility: visible;
    transform: scaleX(.8);
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
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/"}>
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/products"}>
              Products
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/planes"}>
              Planes
            </NavLink>
          </Nav.Item>
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
        <Nav>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/login"}>
              Login
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" exact to={"/signup"}>
              Sign Up
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default Header;
