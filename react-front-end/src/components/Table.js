import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Timer from "./Timer";
import classNames from "classnames";
import GenerateExercise from "./GenerateExercise";
import "./Workout.css";
import "./Table.css";

function Table({ exercises, muscleGroups }) {
  const history = useHistory();
  // const [generatedWorkout, setWorkout] = useState([]); // for rendering workout
  const [random, setRandom] = useState([]);

  const exIDs = random.map((ex) => ex.id);
  const handleToggle = (exerciseObj) => {
    console.log({ exerciseObj });
    let newState = [...random];
    if (newState.some((exercise) => exercise.id === exerciseObj.id)) {
      newState = newState.filter((element) => element.id !== exerciseObj.id);
    } else {
      newState = [...newState, exerciseObj];
    }
    setRandom(newState);
  };

  const handleCreateWorkout = () => {
    history.push("/workout", {
      exerciseIDs: random.map((obj) => obj.id),
    });
  };

  const muscleGroupName = (id) => {
    return muscleGroups.filter((group) => group.id === id)[0].title;
  };

  return (
    <body className="page--container">
      <table id="list">
        <tr className="table-head-row">
          <th></th>
          <th>Exercise Name</th>
          <th>Muscle Group</th>
          <th>Total Time</th>
        </tr>
        {exercises.map((exercise) => {
          return (
            <tr
              onClick={() => {
                handleToggle(exercise);
              }}
              className={exIDs.includes(exercise.id) ? "raw--selected" : ""}
            >
              <td alt={`Avatar n°${exercise.id}`}>
                <img
                  className="table--avatar"
                  src={exercise.exercise_picture_url}
                  alt={exercise.name}
                />
              </td>
              <td>{exercise.exercise_name}</td>
              <td>{muscleGroupName(exercise.muscle_group_id)}</td>
              <td>{`${exercise.total_time} minutes`}</td>
            </tr>
          );
        })}
      </table>
      <Timer exerciseTimes={random.map((ex) => ex.total_time)} />
      <GenerateExercise
        onClick={handleCreateWorkout}
        children={"Create Workout"}
      />
    </body>
  );
}

export default Table;
