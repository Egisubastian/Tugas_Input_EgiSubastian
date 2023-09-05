import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: '8px',
          width: '200px',
          borderBottom: '2px solid transparent', 
        }}
      />
      
      {value ? (
        <div
          style={{
            position: 'absolute',
            top: '-14px', 
            left: '3px', 
            fontSize: '12px',
            color: 'white', 
          }}
        >
          {placeholder}
        </div>
      ) : null}
    </div>
  );
  
}

export default Input;
