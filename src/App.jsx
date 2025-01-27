import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      // Start the timer
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      // Stop the timer when it's not running
      clearInterval(interval);
    }

    // Cleanup function
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        {/* Display minutes */}
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        {/* Display seconds */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        {/* Display milliseconds */}
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setIsRunning(false)}>Stop</button>

        <button onClick={() => setIsRunning(true)}>Start</button>

        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  );
};

export default App;
