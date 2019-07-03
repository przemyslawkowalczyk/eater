import React, { PureComponent } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from './assets/imgs/pobrane.png';

export default class EaterNavBar extends PureComponent {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand>
          <Link to='/'><Image src={ logo } style={{ height: '35px'}} rounded /></Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to='/restaurant'>Restaurant List</Link></Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as <b>my user name </b>
            <Link to='/my-account' style={{ color: '#8b0000'}}>Add restaurant</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}