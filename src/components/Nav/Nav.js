import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

// Styles
import './Nav.css';

/**
 *
 * State Less Component: Header
 * Usage : render a nav that push my routes navigation
 * @param props => { onClick, isActive, text }
 *
 */
const Nav = ({ onClick, isActive, text }) => (
  <nav>
    <div onClick={event => onClick(event, '/')}>
      <span>></span>{' '}
      <Typist
        cursor={{
          show: false
        }}
        className="typist">
        {text}
      </Typist>
      <span id="cursor">|</span>
    </div>
    <ul>
      <li
        onClick={event => onClick(event, '/about')}
        className={isActive.about ? 'li-active' : null}>
        About me
      </li>
      <li
        onClick={event => onClick(event, '/skills')}
        className={isActive.skills ? 'li-active' : null}>
        Skills & Cie
      </li>
      <li
        onClick={event => onClick(event, '/works')}
        className={isActive.works ? 'li-active' : null}>
        Work
      </li>
      <li
        onClick={event => onClick(event, '/contact')}
        className={isActive.contact ? 'li-active' : null}>
        Contact me
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.object.isRequired
};

export default Nav;
