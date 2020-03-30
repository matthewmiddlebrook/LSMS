import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled, { withTheme } from "styled-components";

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
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Lonestar Meter</Navbar.Brand>
      <Navbar.Toggle aria-controls="bacis-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link class="login" href="/login">
              Login{" "}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
