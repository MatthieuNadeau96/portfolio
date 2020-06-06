import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar bg="light" expand="lg" sticky="top">
        <ReactBootStrap.Navbar.Brand href="#home">Matthieu Nadeau</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav className="">
            <ReactBootStrap.Nav.Link className="mr-auto" href="#home">About</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#apps">Apps</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#resume">Resume</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <h1>Hello</h1>
    </div >
  );
}

export default App;
