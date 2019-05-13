import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from "react-scroll";
import './NavBar.css';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <Navbar className="navbar-box" CollapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand className="navbar-name">
                    <a onClick = {this.scrollToTop}>
                    Jocelyn Yoga
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto pr-md-5">
                        <Nav.Link className="nav-link">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                ABOUT
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link">
                            <Link
                                activeClass="active"
                                to="book"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                BOOK A SESSION
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                CONTACT
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;