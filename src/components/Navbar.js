import React from "react";
import * as ReactBootStrap from "react-bootstrap"

const Navbar = () => {
    return (
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Container>
      <ReactBootStrap.Navbar.Brand href="/">TRAVEL JUNKIES</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/packinglist">Packinglist</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/location">Where on earth am I?</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/notes">Travel Memoires</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/faq">FAQ</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link eventKey={2} href="/login">
            Sign out
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
    );
};
export default Navbar;