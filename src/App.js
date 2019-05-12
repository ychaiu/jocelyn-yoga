import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCarousel from './components/elements/Carousel';
import Contact from './components/elements/Contact';
import About from './components/elements/About';
import Book from './components/elements/Book';
import { Element, animateScroll as scroll } from "react-scroll";


class App extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col>
            <ImageCarousel />
            </Col>
          </Row>
              <Element name="about" className="element image-carousel">
                <About />
              </Element>
          <Row>
            <Col>
              <Element name="book" className="element book">
                <Book />
              </Element>
            </Col>
          </Row>
          <Row>
            <Col>
            <Element name="contact" className="element contact">
              <Contact />
            </Element>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default App;
