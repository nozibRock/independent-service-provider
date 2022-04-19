import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
      <div>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col xs={12}>
              <h1 className=" fw-bold text-center my-5">WHO IS DREW BINSKY?</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={4}>
              <img
                src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3582371/settings_images/dbQlUC7qQO3HIMP6u5Zg_Group_1965.png"
                alt="" className='img-fluid'
              />
            </Col>
            <Col md={12} lg={8}>
              <h3 className="fw-bold">
                Drew Binsky is a world traveler, video creator and social media
                personality who has visited ALL 197 countries since 2012.
              </h3>
              <p>
                He grew up in sunny Scottsdale, Arizona and graduated from the
                University of Wisconsin-Madison with a double major in economics
                and entrepreneurship.
              </p>
              <p>
                Drew first got the travel bug when he studied abroad in Prague
                during his junior year of college, then he taught English in
                South Korea for two years where he kicked off his travel blog
                and had the idea to visit every country.
              </p>
              <p>
                Soon later, his girlfriend, Deanna, bought him a video camera
                and inspired him to document his travels... and the rest is
                history.
              </p>
              <p>
                Drew currently has an online community of over 8 million
                followers and his videos have received over 2.5 billion views
                across platforms.
              </p>
              <p>
                His latest projects are a book, a 6-part documentary series
                (shot in his final 6 countries) and a series of courses to help
                you become a better traveler and save money.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default About;