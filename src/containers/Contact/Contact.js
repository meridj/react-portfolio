import React, { Component } from 'react';

// Components
import Title from '../../components/Title';
import Form from '../Form';
import Header from '../../components/Header';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';

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
  render() {
    return (
      <div id="contact">
        <ScrollToTopOnMount />
        <Header text="It will be so cool !" comeFrom="contact" />
        <Title title="Contact me" />
        <Form />
      </div>
    );
  }
}

export default Contact;
