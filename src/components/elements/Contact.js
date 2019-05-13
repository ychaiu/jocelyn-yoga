import React, { Component } from 'react';
import SingleInput from '../presentational/SingleInput';
import TextArea from '../presentational/TextArea';
import Button from '../presentational/Button';
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    this.handleInput = this.handleInput.bind(this);
    }

    handleInput(evt) {
        let value = evt.target.value;
        let name = evt.target.name;
        this.setState(prevState => ({
            ...prevState, [name]: value
        }), );
    }
    
    handleSubmit(evt) {

    }

    render() {
        return (
            <div className='contact-form mr="auto"'>
                <div id="contact-blurb">
                If you're interested in booking a session, or if you simply want to drop a note, I'd love to hear from you!
                </div>
                <SingleInput 
                    name={'name'}
                    type={'text'}
                    value={this.state.name}
                    handleChange={this.handleInput}
                    placeholder={'Your Name'}
                    className={'form-box form-name'}
                />
                <SingleInput
                    name={'email'}
                    type={'text'}
                    value={this.state.email}
                    handleChange={this.handleInput}
                    placeholder={'Your Email'}
                    className={'form-box form-email'}
                />
                <TextArea 
                    name={'message'}
                    rows={5}
                    cols={20}
                    value={this.state.message}
                    handleChange={this.handleInput}
                    placeholder={'Message'}
                    className={'form-box form-message'}
                />
                <Button 
                    className={'contact-button'}
                    onClick={this.handleSubmit}
                    title={'SEND'}
                />
            </div>
        )
    }
}

export default Contact;