import React from 'react';
import '../css/input.css';
const Input = ({ className, type, name, value, placeHolder, onChange }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};

export default Input;
