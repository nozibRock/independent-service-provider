import React from "react";
import logo from "../../../Images/logo.png";
import "./Header.css";

/*****    React Bootstrap   *****/
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
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
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                activeClassName="active-link"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className="nav-link"
                activeClassName="active-link"
              >
                Services
              </Nav.Link>
              <Nav.Link as={Link} to='/about' className="nav-link" activeClassName="active-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/blogs' className="nav-link" activeClassName="active-link">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <div className="d-inline-block">
                  <p className="fw-bold d-inline fs-5">{user.displayName} </p>
                  <Link
                    to="/login"
                    onClick={handleSignOut}
                    className="nav-login-btn fw-bold"
                  >
                    Log Out
                  </Link>
                </div>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="nav-login-btn fw-bold"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
