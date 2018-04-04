import React from 'react';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import './AboutMeDescription.css';

/**
 *
 * State Less Component: AboutMeDescription
 * Usage : render a card that describe a part
 * of my software programing history.
 * @param props => { textPosition, badgeText, textDescription }
 *
 */
const AboutMeDescription = ({ textPosition, badgeText, textDescription }) => {
  const left = textPosition === 'right';
  const right = textPosition === 'left';
  return (
    <div className="me-description" id={textPosition}>
      <Fade duration={5000}>
        <p>{textDescription}</p>
      </Fade>
      <Bounce right={right} left={left}>
        <span>{badgeText}</span>
      </Bounce>
    </div>
  );
};

AboutMeDescription.propTypes = {
  textPosition: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
  textDescription: PropTypes.string.isRequired
};

export default AboutMeDescription;
