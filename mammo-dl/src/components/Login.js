import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// style imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';

// local imports
import {User, Lock} from './Icons';
import logo from '../data/logo-transparent.png'

// backend imports
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberme] = useState(true);
  const [dropdownTitle, setDropdownTitle] = useState("Select Institution");

  return (
    <div className="centeredPage">
      <div className="logoHeader">
      <span>&nbsp;&nbsp;</span>
        <img src={logo} height = {225} width = {450}></img>
      </div>
      <Form className="form coloredForm marginTop">
        <DropdownButton id="dropdown-basic-button" className = "formDropdown" title={dropdownTitle}>
          <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>Penn Medicine</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDropdownTitle(e.target.innerText)}>CHOP</Dropdown.Item>
        </DropdownButton>
      </Form>
      <Form className="form coloredForm marginTop">
        <span>&nbsp;&nbsp;</span>
        <InputGroup className="mb-3">
          <InputGroup.Text className="formInputIcon"><User /></InputGroup.Text>
          <FormControl className="formInput" placeholder="User ID" value={username} onChange={(e) => setUsername(e.target.value)} style = {{color:"white"}} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className = "formInputIcon"><Lock /></InputGroup.Text>
          <FormControl className="formInput" placeholder="Password" value={password} secureTextEntry={true} onChange={(e) => setPassword(e.target.value)} />
        </InputGroup>
        <InputGroup className="mb-3 formButtonRow">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            checked={rememberMe}
            className="formCheckbox"
            onChange={() => setRememberme(!rememberMe)}
          />
          <Form.Text><a href="#home" style = {{color:"black"}}> Forgot Password </a></Form.Text>
        </InputGroup>
        <Link to= "/home" style = {{color:"black"}}>Enter</Link>
      </Form>
    </div>
  );
}

export default Login;