import React from 'react';

const Input = ({
  textarea,
  type,
  onChange,
  value,
  id,
  placeholder,
  className
}) =>
  !textarea ? (
    <input
      id={id}
      type={type}
      value={value}
      onChange={event => onChange(event, id)}
      className={className}
      placeholder={placeholder}
    />
  ) : (
    <textarea
      id={id}
      value={value}
      onChange={event => onChange(event, id)}
      className={className}
      placeholder={placeholder}
      type={type}
      cols="50"
      rows="13"
    />
  );

export default Input;
