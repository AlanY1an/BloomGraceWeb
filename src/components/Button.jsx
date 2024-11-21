import React from 'react';
import './css/button.css';

const Button = ({ type = "button", visual = "button", onClick, className = "", children }) => {
  const baseClass = visual === "link" ? "button-link" : "button-standard";

  return (
    <button 
      type={type} 
      className={`${baseClass} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
