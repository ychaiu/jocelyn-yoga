import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage-container">  
                <Jumbotron className="jumbotron">
                    <p className="blurb">
                    <b id="greeting">HELLO I'M YESSENIA</b><br></br><br></br>
                    FULLSTACK DEVELOPER<br></br>
                    MAP MAKER<br></br>
                    PLANT WHISPERER
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Homepage;