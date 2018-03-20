import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

// Components
import Title from '../../components/Title';
import Form from '../Form';
import Header from '../../components/Header';

// Styles
import './Contact.css';

/**
 *
 * State Full Container: ContactContainer
 * Usage : render contact container
 * @param props => none
 *
 */
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValidate: false
    };
    this.handleValidateForm = this.handleValidateForm.bind(this);
  }

  handleValidateForm() {
    this.setState({ formValidate: true });
  }

  render() {
    return (
      <div id="contact">
        <Header text="It will be so cool !" comeFrom="contact" />
        <Title title="Contact me" />
        <div id="social-network">
          <Fade left>
            <a
              href="https://www.linkedin.com/in/mehdi-meridja-1b1880140/"
              rel="noopener noreferrer"
              target="_blank">
              Linkedin
            </a>
          </Fade>
          <Fade right>
            <a
              href="https://github.com/meridj"
              rel="noopener noreferrer"
              target="_blank">
              Github
            </a>
          </Fade>
        </div>
        <Form handleValidateForm={this.handleValidateForm} />
        {this.state.formValidate ? (
          <Fade bottom cascade duration={1000}>
            <p className="answer-text">
              Great ! I will answer as soon as possible !
            </p>
          </Fade>
        ) : null}
      </div>
    );
  }
}

export default Contact;
