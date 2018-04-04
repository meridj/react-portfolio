import React from 'react';
import PropTypes from 'prop-types';

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
const SkillsCategory = ({ technoName, title }) => (
  <div className="theme-techno-container">
    <Fade bottom cascade>
      <h4 className="theme-techno-name">{title}</h4>
    </Fade>
    <ul className="techno-name-container">
      {technoName.map((t, key) => (
        <Fade key={key} bottom cascade duration={1000}>
          <li className="techno-name">{t}</li>
        </Fade>
      ))}
    </ul>
  </div>
);

SkillsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  technoName: PropTypes.array.isRequired
};

export default SkillsCategory;
