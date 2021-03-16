import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"


function Navigation() {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/workflow">Workflow</Nav.Link>
          <Nav.Link href="vehicles-on-site">Vehicles on Site</Nav.Link>
          <Nav.Link href="/customer-details">Customer Details</Nav.Link>
          <Nav.Link href="/reports">Reports</Nav.Link>
          <Nav.Link href="/data-entry">Data Entry</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Navigation