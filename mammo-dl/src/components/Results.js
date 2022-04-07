// style imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import NavBar from './NavBar';
import { Person } from './Icons';

import img1 from '../data/img1.png'
import img2 from '../data/img2.png'
import img3 from '../data/img3.png'
import original from '../data/original.png'

function Results() {
  return (
    <>
      <NavBar />
      <Row>
        <Col className="centeredPage py-4 px-4">
          <div className="centeredPage">
            <Row>
              <Col className="carouselColumn">
                <Carousel w="40px" h="40px" style={{ margin: "50", borderRadius: "20px" }}>
                  <Carousel.Item><img className="d-block w-100" src={img1} alt="First slide" />
                    <Carousel.Caption><h3></h3><p>Breast-extracted mammogram overlaid with detected dense tissue</p></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="Second slide" />
                    <Carousel.Caption><h3></h3><p>Original mammogram overlaid with detected breast region</p></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item><img className="d-block w-100" src={img3} alt="Third slide" />
                    <Carousel.Caption> <h3></h3><p>Breast-extracted mammogram</p></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col className="py-4" style={{ backgroundColor: "#5B91D166", borderRadius: "20px" }}>
                <div className="carouselColumn">
                  <h2 style={{ color: "white", fontWeight: "bolder" }}>Result</h2>
                  <div className="percentDensity d-grid px-4 py-4">
                    <h4 style={{ color: "white", fontWeight: "bold" }}>Percent Density</h4>
                    <Button className="densityButton my-2" size="lg" disabled>
                      14.07%
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="my-4" style={{ backgroundColor: "#E0E0E0", borderRadius: "20px" }}>
              <Col className="py-4 d-block" sm={12} style={{ width: "100%" }}>
                <h2 style={{ color: "black", fontWeight: "bolder" }}>Input Image</h2>
                <img style={{ height: "25vh", width: "auto" }} src={original} alt="First slide" />
              </Col>
            </Row>
          </div>
        </Col>

        <Col sm={3} className="resultsList py-4" style={{ backgroundColor: "#F9F9F9" }}>
          <h2>Recents</h2>
          <hr style={{ color: "red", backgroundColor: "red" }} />
          <Card className="my-2">
            <Card.Header >
              <Person />
              <p>Apr 5. 04:20pm</p>
            </Card.Header>
            <Card.Body>
              <b>Aprupa Alahari</b>
              <Button variant="link" size="sm" className="px-0 py-0">
                View Image and Results
              </Button>
            </Card.Body>
          </Card>
          <Card className="my-2">
            <Card.Header >
              <Person />
              <p>Apr 2. 01:39pm</p>
            </Card.Header>
            <Card.Body>
              <b>Angelina Heyler</b>
              <Button variant="link" size="sm" className="px-0 py-0">
                View Image and Results
              </Button>
            </Card.Body>
          </Card>
          <Card className="my-2">
            <Card.Header >
              <Person />
              <p>Mar 30. 11:22am</p>
            </Card.Header>
            <Card.Body>
              <b>Keshava Katti</b>
              <Button variant="link" size="sm" className="px-0 py-0">
                View Image and Results
              </Button>
            </Card.Body>
          </Card>
          <Card className="my-2">
            <Card.Header >
              <Person />
              <p>Mar 29. 09:46am</p>
            </Card.Header>
            <Card.Body>
              <b>Ram Muthukrishnan</b>
              <Button variant="link" size="sm" className="px-0 py-0">
                View Image and Results
              </Button>
            </Card.Body>
          </Card>
          <Card className="my-2">
            <Card.Header >
              <Person />
              <p>Mar 21. 10:02am</p>
            </Card.Header>
            <Card.Body>
              <b>Michael Sanborn</b>
              <Button variant="link" size="sm" className="px-0 py-0">
                View Image and Results
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>

  );
}

export default Results;
