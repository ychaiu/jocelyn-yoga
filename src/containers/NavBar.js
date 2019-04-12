import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
// import Homepage from '../components/Homepage';
// import About from '../components/About';
// import Projects from '../components/Projects';
// import Resume from '../components/Resume';
// import Blog from '../components/Blog';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="navbar-box" CollapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand className="navbar-name" href="/">Yessenia</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto pr-md-5">
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <Nav.Link href="/projects">PROJECTS</Nav.Link>
                        <Nav.Link href="/blog">BLOG</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;