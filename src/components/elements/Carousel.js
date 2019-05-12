import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import image1 from '../../assets/homepage-photos/DSC03419_ 2.jpg';
import image2 from '../../assets/homepage-photos/DSC03467_ 2.jpg';
import image3 from '../../assets/homepage-photos/DSC03415 2.jpg';

class ImageCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default ImageCarousel;