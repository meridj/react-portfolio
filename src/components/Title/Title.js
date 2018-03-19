import React from 'react';

// Components
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
const Title = props => {
  return (
    <Fade left>
      <h2 className={'title'}>{props.title}</h2>
    </Fade>
  );
};

export default Title;
