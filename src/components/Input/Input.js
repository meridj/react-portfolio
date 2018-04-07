import React from 'react';
import PropTypes from 'prop-types';
import { Bounce } from 'react-reveal';

// Styles
import './Input.css';

/**
 *
 * State Less Container: App
 * Usage : render App container
 * @param props => textarea, type, onChange, value, name, placeholder, className
 *
 */
const Input = ({
  textarea,
  type,
  onChange,
  value,
  name,
  placeholder,
  appearFrom
}) => (
  <Bounce
    left={appearFrom === 'left' ? true : false}
    right={appearFrom === 'right' ? true : false}
  >
    {!textarea ? (
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
    )}
  </Bounce>
);

Input.propTypes = {
  textarea: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
