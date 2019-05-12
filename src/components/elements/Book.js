import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Book.css';

class About extends Component {
    render() {
        return (
            <Row className="book-row">
                <Col> 
                    <div className="book-header">
                        ONE-ON-ONE
                    </div>
                    <div className="book-text">
                        <p>I am available to schedule private sessions for those interested in starting their yoga practice with a strong foundation or relieving physical tension or mental stress. Through private sessions I am able to offer focused one-on-one sessions tailored to your individual needs and goals, which allows for greater attention and guidance than would otherwise be possible in a group setting.</p>  
                        <p>Individuals session rates are available on a sliding scale depending on your financial circumstances.</p>
                    </div>
                </Col>
                <Col>
                    <div className="book-header">
                        CORPORATE
                    </div>
                    <div className="book-text">
                        <p>As a former tax accountant, I am familiar with the experience of working in a high-stress environment. Although it was always seemed like a miracle to be able to make time for yoga during the busy season, I don't recall ever regretting it when I dragged myself to a class.</p>
                        <p>I am available to schedule yoga sessions at your office. Promoting yoga, health, and wellbeing in the workplace can help employees increase productivity and gain a deeper sense of happiness and job satisfaction. Invest in your employees' wellness.</p> 
                    </div>
                </Col>
                <Col> 
                    <div className="book-header">
                        NONPROFIT
                    </div>
                    <div className="book-text">
                        <p>As a San Francisco native, I am passionate about giving back to the local community. Regardless of your mission, I am sure that the health and wellbeing of your employees is pivotal to achieving it. Promoting yoga, health, and wellbeing in the workplace can help your employees increase productivity and gain an even deeper sense of happiness and job satisfaction.</p>
                        <p>Group session rates are available on a sliding scale depending on your nonprofit organization’s financial circumstances.</p>
                    </div>
                </Col>
            </Row>

        );
    }
}

export default About;