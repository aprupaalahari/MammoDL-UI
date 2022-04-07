// package imports
import React from 'react';
import Switch from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

// local imports
import './App.css';
import Login from './components/Login';
import Account from './components/Account';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Input from './components/Input';
import Results from './components/Results';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} exact />
        <Route exact path="account" element={<Account />} exact />
        <Route exact path="home" element={<Home />} exact />
        <Route exact path="input" element={<Input />} exact />
        <Route exact path="results" element={<Results />} exact />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
