import React, { Component } from 'react';
import { LightSpeed, Fade } from 'react-reveal';

// Components
import Title from '../../components/Title';
import Form from '../Form';
import Header from '../../components/Header';
import SocialNetwork from '../../components/SocialNetwork';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';

// Datas
import { socialNetworks } from '../../config/data';

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
    return <div id="contact">
        <ScrollToTopOnMount />
        <Header text="It will be so cool !" comeFrom="contact" />
        <Title title="Contact me" />
        <Fade>
          <p id="good-bye">
            If you want more information, you can contact me here.
          </p>
        </Fade>
        <Form />
        <section id="social-network-section">
          <LightSpeed delay={500} left>
            <h4>Hey, follow me on :</h4>
          </LightSpeed>
          <LightSpeed right delay={500}>
            <div id="social-networks">
              {socialNetworks.map(({ socialNetworkName, link }, key) => (
                <SocialNetwork
                  key={key}
                  socialNetworkName={socialNetworkName}
                  link={link}
                />
              ))}
            </div>
          </LightSpeed>
        </section>
      </div>;
  }
}

export default Contact;
