import React from "react";
import "./Timer.css";

function Timer({ exerciseTimes }) {
  return (
    <div className="timer-container">
      Your total workout time is:
      {`${exerciseTimes.reduce((total, num) => total + num, 0)} min`}
    </div>
  );
}

export default Timer;
