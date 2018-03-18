import React from 'react';

// Components
import Fade from 'react-reveal/Fade';

// Styles
import './SkillsCategory.css';

/**
 *
 * Stateless Component: Skills
 * Usage : render a svg for a intuitive representation
 * @param props => { title }
 *
 */
const SkillsCategory = props => {
  return (
    <div className={'theme-techno-container'}>
      <Fade top>
        <h4 className={'theme-techno-name'}>{props.title}</h4>
      </Fade>
      <ul className={'techno-name-container'}>
        {props.technoName.map((t, key) => (
          <Fade key={key} bottom duration={1000}>
            <li className={'techno-name'}>{t}</li>
          </Fade>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCategory;