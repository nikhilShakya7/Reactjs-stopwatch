import React, { useEffect, useState } from "react";
import "./App.css"; // Import the CSS file

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="button-container">
        <button className="start-button" onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
        <button className="stop-button" onClick={() => setIsRunning(false)}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default App;
