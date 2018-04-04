import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import './AboutMeDescription.css';

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

export default AboutMeDescription;
