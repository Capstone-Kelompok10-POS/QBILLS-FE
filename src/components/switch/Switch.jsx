import React, { useState } from 'react';

const Switch = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <div
      className="toggle-switch-container"
      onClick={handleToggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        className={`toggle-switch-track ${isChecked ? 'checked' : 'unchecked'}`}
        style={{
          width: '60px',
          height: '32px',
          borderRadius: '100px',
          backgroundColor: isChecked ? '#BE8465' : '#EBDAD0',
          display: 'flex',
          alignItems: 'center',
          padding: '2px',
          boxSizing: 'border-box',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          border: isChecked ? 'none' : '2px solid #BE8465',
        }}
      >
        <div
          className={`toggle-switch-handle ${isChecked ? 'checked' : 'unchecked'}`}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: isChecked ? '#EBDAD0' : '#DCBDAD',
            transition: 'transform 0.3s ease',
            transform: isChecked ? 'translateX(26px)' : 'translateX(0)',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            position: 'relative',
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default Switch;
