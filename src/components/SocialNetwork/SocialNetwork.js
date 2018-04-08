import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './SocialNetwork.css';

/**
 *
 * Stateless Component: SocialNetwork
 * Usage : render a SocialNetwork for all the containers
 * @param props => { SocialNetwork }
 *
 */
const SocialNetwork = ({ link, socialNetworkName }) => (
  <a id="social-network" href={link} rel="noopener noreferrer" target="_blank">
    {socialNetworkName}
  </a>
);

SocialNetwork.propTypes = {
  socialNetworkName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SocialNetwork;
