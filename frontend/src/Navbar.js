import React, { PureComponent } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class EaterNavBar extends PureComponent {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand>
          <Link to='/'>Eater</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to='/restaurant'>Restaurant List</Link></Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <Link to='/my-account'>User name</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}