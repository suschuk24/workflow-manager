import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"


function Navigation() {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/workflow">Workflow</Nav.Link>
          <Nav.Link href="vehicles-on-site">Vehicles on Site</Nav.Link>
          <Nav.Link href="/messaging">Messaging</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Navigation