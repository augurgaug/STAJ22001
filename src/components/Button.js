import React from 'react';
import '../css/button.css';
const Button = ({ className, onClick, label,type,children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
      {label}
    </button>
  );
};

export default Button;
