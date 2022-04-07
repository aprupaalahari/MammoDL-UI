// style imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import NavBar from './NavBar';

function Input() {
	const [dropdownTitle, setDropdownTitle] = useState("Specify View");
	const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
	
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //         this.sleep(5000).then(r => {
    //         // do something
    //   	    })
    // }
	return (
	<>
	<NavBar/> 
	<div className="centeredPage">
		<Form className="form coloredForm marginTop">
        <a>Input Image:
        </a>
		<span>&nbsp;&nbsp;</span>
		<Form.Group controlId="formFile" className="mb-3">
			<Form.Label></Form.Label>
			<Form.Control type="file" />
		</Form.Group>
		<DropdownButton id="dropdown-basic-button" className = "formDropdown" title={dropdownTitle}>
          <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Left CC</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Right CC</Dropdown.Item>
		  <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Left MLO</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Right MLO</Dropdown.Item>
        </DropdownButton>
      </Form>
	  <Link to= "/results">
		  <Button className = "btn btn-secondary" type = "submit">
          Run Model
      </Button></Link>
	  {/* <Link to= "/results">
		  <Button className = "btn btn-secondary" type = "submit" onClick={() => componentDidUpdate()}>
          Run Model
      </Button></Link> */}
	</div>
	</>
	  
	);
}

export default Input;
