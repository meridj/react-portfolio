import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.css';

/**
 *
 * State Less Container: App
 * Usage : render App container
 * @param props => textarea, type, onChange, value, name, placeholder, className
 *
 */
const Input = ({ textarea, type, onChange, value, name, placeholder }) =>
  !textarea ? (
    <input
      name={name}
      type={type}
      value={value}
      onChange={event => onChange(event, name)}
      placeholder={placeholder}
    />
  ) : (
    <textarea
      name={name}
      value={value}
      onChange={event => onChange(event, name)}
      className="textarea"
      placeholder={placeholder}
      cols="50"
      rows="13"
    />
  );

Input.propTypes = {
  textarea: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
