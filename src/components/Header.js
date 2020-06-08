import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class Header extends React.Component {
    render() {

        return (
            <ReactBootStrap.Navbar bg="white" expand="md" sticky="top">
                <ReactBootStrap.Navbar.Brand href="/">Logo</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav className="">
                        <ReactBootStrap.Nav.Link className="mr-auto" href="/about">About</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/apps">Apps</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/resume">Resume</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/contact">Contact</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        );
    }
}
