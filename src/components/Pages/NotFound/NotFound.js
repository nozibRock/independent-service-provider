import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
      <div>
        <Container className="mt-5 not-found-container">
          <h1 className="error">404</h1>
          <h1>Page Not Found</h1>
          <NavLink to="/home" className="btn btn-light">
            Go to Home
          </NavLink>
        </Container>
      </div>
    );
};

export default NotFound;