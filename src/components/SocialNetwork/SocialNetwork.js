import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Ionicon from 'react-ionicons';
// Styles
import './SocialNetwork.css';

/**
 *
 * Stateless Component: SocialNetwork
 * Usage : render a SocialNetwork for all the containers
 * @param props => { SocialNetwork }
 *
 */
const SocialNetwork = () => (
  <div>
    <a
      id="social-network"
      href="https://www.linkedin.com/in/mehdi-meridja-1b1880140/"
      rel="noopener noreferrer"
      target="_blank"
    >
      Linkedin
      <Ionicon
        icon="logo-linkedin"
        className="social-network-logo"
        fontSize="20"
        color="white"
      />
    </a>
  </div>
);

SocialNetwork.propTypes = {};

export default SocialNetwork;
