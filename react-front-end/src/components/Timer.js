import React from "react";

function Timer({ exerciseTimes }) {
  return (
    <div>
      {`Total workout time: ${exerciseTimes.reduce(
        (total, num) => total + num,
        0
      )} min`}
    </div>
  );
}

export default Timer;
