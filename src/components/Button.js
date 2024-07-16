import React from 'react';
import '../css/button.css';
const Button = ({ className, onClick, label,type }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
