import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import Footer from "./pages/Footer";
import "../App.css";
import "./SavedWorkouts.css";

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
    <body className="saved--container">
      <h1 className="saved-title">Your Saved Workouts</h1>
      <>
        {savedWorkouts.map((workout, index) => {
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
