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
      .then((res) => {
        // console.log({ exerciseIDs });
        // history.push("/workout", {
        //   exerciseIDs: exerciseIDs,
        // });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const handleDeleteWorkout = (id) => {
    const params = { id };
    axios
      .post(`/api/workout/delete`, { params })
      .then((res) => {
        // console.log({ res });
        // setExerciseIDs(returnedIDs);
        // return
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  // const handleDeleteWorkout = (id) => {
  //   // DELETE request using axios with error handling
  //   axios
  //     .delete("http://localhost:3000/savedworkouts/:id")
  //     .then((response) => console.log("Delete successful"))
  //     .catch((error) => {
  //       console.log(error.message);
  //       console.error("There was an error!", error);
  //     });
  // };

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
                <div>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    path={`/workout/saved/${workout.id}`}
                    onClick={() => handleDeleteWorkout(workout.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </>
    </body>
  );
}

export default SavedWorkouts;
