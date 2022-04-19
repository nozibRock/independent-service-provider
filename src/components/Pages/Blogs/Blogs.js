import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="my-5">
      <Row>
        <Col>
          <h3></h3>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-2">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20190606141632/Untitled-Diagram-2019-06-06T141540.818.png"
            />
            <Card.Body>
              <Card.Title>
                Difference between Authentication and Authorization
              </Card.Title>
              <Card.Text>
                Authentication is the act of validating that users are whom they
                claim to be. This is the first step in any security process.
              </Card.Text>
              <Card.Text>
                Authorization in system security is the process of giving the
                user permission to access a specific resource or function. This
                term is often used interchangeably with access control or client
                privilege.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://firebase.google.com/images/products/auth/auth-2.png"
            />
            <Card.Body>
              <Card.Title>
                Why are you using `firebase`? What other options do you have to
                implement authentication?
              </Card.Title>
              <Card.Text>
                Firebase Authentication makes it easier to get your users
                signed-in without having to understand the complexities behind
                implementing your own authentication system.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://blog.back4app.com/wp-content/uploads/2018/01/Firebase-Alternatives-1.jpg"
            />
            <Card.Body>
              <Card.Title>
                What other services does `firebase` provide other than
                authentication?
              </Card.Title>
              <Card.Text>
                There are many services which Firebase provides, Most useful of
                them are:
              </Card.Text>
              <ul>
                <li>Cloud Fire store</li>
                <li>Cloud Functions</li>
                <li>Authentication</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions.</li>
                <li>Cloud Messaging</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
