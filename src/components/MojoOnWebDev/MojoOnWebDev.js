import React from 'react';

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
const MojoOnWebDev = props => {
  return (
    <div className="description-container">
      <Fade top delay={200} duration={1000}>
        <div>{props.svg}</div>
      </Fade>
      <Zoom delay={200} duration={1000}>
        <h3 className="title-text">{props.title}</h3>
      </Zoom>
      <Fade bottom delay={200} duration={1000}>
        <p className="text-description">{props.text}</p>
      </Fade>
    </div>
  );
};

export default MojoOnWebDev;
