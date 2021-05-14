import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Timer from "./show/Timer";
import classNames from "classnames";
import GenerateExercise from "./show/GenerateExercise";
import "./Workout.css";
import "./ExerciseTable.css";

function ExerciseTable({ exercises, muscleGroups }) {
  const history = useHistory();
  const [toggle, setToggle] = useState([]);

  const exIDs = toggle.map((ex) => ex.id);
  const handleToggle = (exerciseObj) => {
    let newState = [...toggle];
    if (newState.some((exercise) => exercise.id === exerciseObj.id)) {
      newState = newState.filter((element) => element.id !== exerciseObj.id);
    } else {
      newState = [...newState, exerciseObj];
    }
    setToggle(newState);
  };

  const handleCreateWorkout = () => {
    history.push("/workout", {
      exerciseIDs: toggle.map((obj) => obj.id),
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
      <Timer exerciseTimes={toggle.map((ex) => ex.total_time)} />
      <GenerateExercise
        onClick={handleCreateWorkout}
        children={"Create Workout"}
      />
    </body>
  );
}

export default ExerciseTable;
