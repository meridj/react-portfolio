import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

// Styles
import './Title.css';

/**
 *
 * Stateless Component: Title
 * Usage : render a title for all the containers
 * @param props => { title }
 *
 */
const Title = ({ title }) => (
  <Fade left>
    <h2 className="title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
