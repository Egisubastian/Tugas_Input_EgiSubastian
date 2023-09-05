import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  style: React.CSSProperties; 
  disabled: boolean; 
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled} 
    >
      {props.label}
    </button>
  );
}

export default Button;
