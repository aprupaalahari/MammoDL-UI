// package imports
import React, { useState } from 'react';

// local imports
import { Edit } from './Icons';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// backend imports

function Account() {
  // keep track of username, password and community you are apart of?
  const [currPassword, setCurrPassword] = useState('mammoDL');
  const [editPasswordMode, setEditPasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState(currPassword);

  const saveNewPassword = () => {
    setCurrPassword(newPassword);
    setEditPasswordMode(false);
  };

  const cancelUpdatePassword = () => {
    setEditPasswordMode(false);
    setNewPassword(currPassword);
  };

  return (
    <>
      <NavBar/>
    <div className="page">
      <h1> My Account </h1>
	  <div className="row">
        Institution: Penn Med
      </div>
	  <div className="row">
        User ID: aalahari
      </div>
      <div className="row">
	  Password:
        <div>
          {editPasswordMode ? (
            <>
              <input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <button type="button" onClick={() => saveNewPassword()}>
                Save
              </button>
              <button type="button" onClick={() => cancelUpdatePassword()}>
                Cancel
              </button>
            </>
          ) : (
            <div>
              {currPassword}
              <button type="button" onClick={() => setEditPasswordMode(!editPasswordMode)}>
                <Edit />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="row">
      <Link to= "/"><Button className = "btn btn-primary" type = "submit">
          Log Out
      </Button></Link>
      </div>
      <div className="row"></div>
    </div>
    </>
  );
}

export default Account;
