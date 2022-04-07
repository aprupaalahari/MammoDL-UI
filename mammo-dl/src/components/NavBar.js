import React from 'react';

// bootsrap impots
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../data/logo-transparent.png'


// local imports
import { Bell, Question, User } from './Icons';

function NavBar() {
  return (
    <Navbar className="nav-blue my-nav">
      <Container fluid>
      <Nav.Link href="/">
      <Navbar.Brand><img src={logo} height = {50} width = {100}></img></Navbar.Brand>
          </Nav.Link>
        <Nav>
          
          <Nav.Link href="/home">HOME</Nav.Link>
          <Nav.Link href="/input">INPUT</Nav.Link>
          <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSeXcPOHPAbLfPAUg0gVNdHkmAIsgC93uasYtVawMEWllkYIQA/viewform?pli=1">FEEDBACK</Nav.Link>

          <Nav.Link href="/account">
            <User />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
