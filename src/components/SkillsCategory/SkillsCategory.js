import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

// Components
import SkillName from '../SkillName';

// Styles
import './SkillsCategory.css';

/**
 *
 * Stateless Component: Skills
 * Usage : render a svg for a intuitive representation
 * @param props => { title }
 *
 */
const SkillsCategory = ({ technoNames, title }) => (
  <div className="theme-techno-container">
    <Fade bottom cascade>
      <h4 className="theme-techno-name">{title}</h4>
    </Fade>
    <ul className="techno-name-container">
      {technoNames.map((technoName, key) => (
        <SkillName technoName={technoName} />
      ))}
    </ul>
  </div>
);

SkillsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  technoName: PropTypes.array.isRequired
};

export default SkillsCategory;
