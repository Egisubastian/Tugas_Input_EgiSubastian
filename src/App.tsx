import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('masukan huruf atau angka');
  const [isLoading, setIsLoading] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Submit');
  const maxCharacterCount = 40;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue.length <= maxCharacterCount) {
      setInputValue(newValue);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setButtonLabel('Loading...');

    setTimeout(() => {
      if (inputValue.length >= maxCharacterCount) {
        setMessage(`Success - ${maxCharacterCount} characters reached`);
      } else if (inputValue.length >= 8) {
        setMessage('Success');
      } else {
        setMessage('Error, minimum 8 characters');
      }

      setIsLoading(false);
      setButtonLabel('Submit');
    }, 2000);
  };

  const buttonStyle = {
    fontSize: '10px',
    backgroundColor: 'blue',
    color: 'white',
  };

  const containerStyle = {
    border: '1px solid navy blue',
    padding: '10px',
    maxWidth: '300px',
    boxShadow: '2px 2px 5px gold',
    margin: '0 auto',
    marginTop: '-10px',
    marginLeft: '500px',
  };

  const headingStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    marginTop: '-5px',
    marginLeft: '100px',
  };

  const spinnerStyle = {
    borderTop: '2px solid #3498db',
    borderRight: '2px solid transparent',
    borderBottom: '2px solid transparent',
    borderLeft: '2px solid transparent',
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    animation: 'spin 1s linear infinite',
    marginRight: isLoading ? '10px' : '10', 
  };

  const spinnerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage('masukan huruf atau angka');
    }, 0);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>ISI INPUT</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Input
          type="password"
          placeholder="input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div style={spinnerContainerStyle}>
          {isLoading ? (
            <div style={spinnerStyle} />
          ) : (
            <Button
              label={buttonLabel}
              onClick={handleSubmit}
              style={buttonStyle}
              disabled={isLoading}
            />
          )}
        </div>
      </div>
      <div style={{ marginLeft: '1px' }}>
        <div style={{ fontSize: '10px' }}>{message}</div>
      </div>
      
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
