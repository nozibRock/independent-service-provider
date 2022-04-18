import React from 'react';
import logo from '../../../Images/logo.png'
import './Header.css'

/*****    React Bootstrap   *****/
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="200"
                className="d-inline-block align-center"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto me-2">
                <Nav.Link to="/" className="nav-link" activeClassName="active-link">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link" activeClassName="active-link">Services</Nav.Link>
                <Nav.Link className="nav-link" activeClassName="active-link">About</Nav.Link>
                <Nav.Link className="nav-link" activeClassName="active-link">
                  Blogs
                </Nav.Link>
              </Nav>
              <Nav></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;