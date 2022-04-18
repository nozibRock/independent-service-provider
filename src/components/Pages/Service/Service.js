import React from 'react';
import { Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price, quantity } = service;
  const navigate = useNavigate();
  const navigateToPackageDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="single_service">
      <Col className="p-3">
        <img src={img} className="img-fluid" alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <p> Price:{price}</p>
        <p>{quantity}</p>
        <Link to="/checkOut">
          <button
            className="btn btn-secondary fw-bold"
            type="button"
          >
            Book now
          </button>
        </Link>
      </Col>
    </div>
  );
};

export default Service;