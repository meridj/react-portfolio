import React from 'react';
import PropTypes from 'prop-types';

// Components
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

// Styles
import './MojoOnWebDev.css';

/**
 *
 * Stateless Component: MojoOnWebDev
 * Usage : render my development methods
 * @param props => { svg, title, text }
 *
 */
const MojoOnWebDev = ({ svg, title, text }) => (
  <div className="description-container">
    <Fade top delay={200} duration={1000}>
      <div>{svg}</div>
    </Fade>
    <Zoom delay={200} duration={1000}>
      <h3 className="title-text">{title}</h3>
    </Zoom>
    <Fade bottom delay={200} duration={1000}>
      <p className="text-description">{text}</p>
    </Fade>
  </div>
);

MojoOnWebDev.propTypes = {
  svg: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default MojoOnWebDev;
