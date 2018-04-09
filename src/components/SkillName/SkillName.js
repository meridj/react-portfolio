import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

// Styles
import './SkillName.css';

/**
 *
 * Stateless Component: SkillName
 * Usage : render a li with the name of the skill
 * @param props => { technoName }
 *
 */
const SkillName = ({ technoName }) => (
  <Fade bottom cascade duration={1000}>
    <li className="techno-name">{technoName}</li>
  </Fade>
);

SkillName.propTypes = {
  technoName: PropTypes.string.isRequired
};

export default SkillName;
