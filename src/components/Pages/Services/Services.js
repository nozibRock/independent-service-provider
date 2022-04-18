import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Service/Service";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("packages.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container fluid className="my-5">
        <Row>
          <Col xs={12}>
            <h1 className=" fw-bold text-center my-5">
              HERE'S HOW DREW CAN HELP YOU:
            </h1>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="row g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
