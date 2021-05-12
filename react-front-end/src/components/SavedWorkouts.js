import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

function SavedWorkouts() {
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    // console.log("state=", state);
    // const params = {
    //   user_id: ,
    // };
    axios
      .get("/api/workout/saved")
      .then((res) => {
        console.log("response for saved workouts", res.data);
        setSavedWorkouts(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div>
      <h1>Your Saved Workouts</h1>
      <div>
        {savedWorkouts.map((workout) => {
          return <p>{workout.name}</p>;
        })}
      </div>
    </div>
  );
}

export default SavedWorkouts;
