import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Person } from './Icons';
// local imports
import NavBar from './NavBar';

// backend imports

function Home() {
  const [open, setOpen] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState("Specify View");

  return (
    <>
      <NavBar />
      <Row>
        <Col sm={9} className="centeredPage py-4 px-4">
          <Button variant="primary" size="lg" style={{ background: "#eaeaea", color: "#00005c" }} variant="light" disabled>
            Our base model predicts percent density by training a UNet to segment the breast from the mammogram, training a second UNet to
            segment the dense tissue from the image, and finally calculating the segmented breast and dense tissue areas to compute the percent
            density of the imaged breast. This base model improves upon the original Deep-LIBRA method by (1) getting rid of the explicit
            pectoral muscle segmentation step and instead incorporating pectoral muscle removal into the breast segmentation step itself,
            and (2) using deep learning rather than traditional machine learning methods to segment the dense tissue. Finally, we add
            federated learning to the training process to allow users to train models on multiple-institution datasets with privacy constraints.
            <br></br>
            <br></br>
            Click on "New Input" to run our DL model on an input image.
          </Button>
          <span>&nbsp;&nbsp;</span>
          <Button className="btn btn-secondary" style = {{background : "#233f87"}} onClick={() => setOpen(!open)}>
            + New Input
          </Button>
          <Collapse className="centeredPage" in={open}>
            <div>
              <Form className="form coloredForm marginTop" style={{ width: "50vw" }}>
                <a>Input Image:
                </a>
                <span>&nbsp;&nbsp;</span>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label></Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <DropdownButton id="dropdown-basic-secondary" className="formDropdown" title={dropdownTitle}>
                  <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Left CC</Dropdown.Item>
                  <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Right CC</Dropdown.Item>
                  <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Left MLO</Dropdown.Item>
                  <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Right MLO</Dropdown.Item>
                </DropdownButton>
              </Form>
              <Link to="/results"><Button className="btn btn-secondary" variant='Primary' type="submit" style = {{background : "#233f87"}}>
                Run Model
              </Button></Link>
            </div>
          </Collapse>
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

export default Home;
