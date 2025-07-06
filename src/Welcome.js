import React, { useState } from 'react';

const WelcomeMessage = () => {
  const [name, setName] = useState('John');
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleButtonClick}>Show Welcome Message</button>
      {showMessage && <p>Hi "{name}!!!" Welcome to S3 bucket</p>}
    </div>
  );
};

export default WelcomeMessage;
