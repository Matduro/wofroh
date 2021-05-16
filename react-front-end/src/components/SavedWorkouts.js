import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "./show/Button";
import "../App.css";
import "./SavedWorkouts.css";
import { useHistory } from "react-router-dom";

function SavedWorkouts() {
  const history = useHistory();
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  // const [exerciseIDs, setExerciseIDs] = useState([]);

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

  const handleClickWorkout = (id) => {
    const params = { id };
    axios
      .get("/api/workout/saved/exercises", { params })
      .then((res) => {
        // console.log({ res });
        const returnedIDs = res.data[0].exercise_id;
        console.log({ returnedIDs });
        history.push("/workout", {
          exerciseIDs: returnedIDs,
        });
        // setExerciseIDs(returnedIDs);
        // return
      })
      // .then((res) => {
      //   console.log({ exerciseIDs });
      //   // history.push("/workout", {
      //   //   exerciseIDs: exerciseIDs,
      //   // });
      // }
      // )
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <body className="saved--container">
      <h1 className="saved-title">Your Saved Workouts</h1>
      <>
        {savedWorkouts.map((workout, index) => {
          // console.log({ workout });
          return (
            <>
              <div className="hero-btns saved-workouts">
                <label className="saved-list">
                  {index > 8 ? index + 1 : "0" + (index + 1).toString()}
                </label>
                <p>{workout.name}</p>
                <Button
                  className="btns"
                  buttonStyle="btn--go"
                  buttonSize="btn--saved"
                  path={`/workout/saved/${workout.id}`}
                  onClick={() => handleClickWorkout(workout.id)}
                >
                  GO
                </Button>
              </div>
            </>
          );
        })}
      </>
    </body>
  );
}

export default SavedWorkouts;
