import React from "react";

const Detection = () => {
  const handleButtonClick = () => {
    window.open("/Face-detection/index.html", "_blank");
  };

  return (
    <div>
      <h1>Face Detection</h1>
      <button onClick={handleButtonClick}>Start Face Detection</button>
    </div>
  );
};

export default Detection;