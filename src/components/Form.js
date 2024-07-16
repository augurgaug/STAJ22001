import React from 'react';
import '../css/form.css';

const Form = ({ className, children }) => {
  return (
    <form className={className}>
      {children}
    </form>
  );
};

export default Form;
