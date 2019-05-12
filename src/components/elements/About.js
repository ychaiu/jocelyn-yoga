import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './About.css';

class About extends Component {
    render() {
        return (
            <Row className="about-row">
                <Col sm={4} xs ={12}> 
                    <div className="about-img-wrapper">
                        <img className="about-img" src="https://res.cloudinary.com/ychaiu/image/upload/v1557631412/jocelyn-yoga-photos/fullsizeoutput_282c.jpg"></img>
                    </div>
                </Col>
                <Col>
                    <div className="about-text">
                        <p>I first encountered breathwork at a very young age. I grew up with asthma, and was told to avoid vigorous physical activity for most of my childhood. I remember as a four year old, working with my father who consulted a Qiqong instructor on how to deal with midnight asthma attacks. He taught me simple techniques to calm the mind, linking the breath with simple hand gestures and mantras.</p>
                        <p>As an Asian American growing up in San Francisco, I struggled with reconciling the many sides of myself that were built upon values I learned from my Chinese heritage and this progressive city I call home. Yoga has been my grounding force.</p>
                        <p>I discovered yoga in 2008 while in college. Initially, what motivated me to keep returning to the mat was a desire to get fit and relieve stress. I continued to rely on yoga throughout my former career in tax accounting to manage stress and stay active during the grueling busy seasons.</p>
                        <p>However, my journey was transformed when I discovered the benefits of yoga for scoliosis with Elise Browning Miller and again after I completed my 200 hour teacher training with Yoga Tree. Yoga became much more than just a form of exercise and stress relief</p>
                    </div>
                </Col>
            </Row>

        );
    }
}

export default About;