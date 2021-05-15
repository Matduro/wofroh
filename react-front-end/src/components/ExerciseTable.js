import React, { useEffect, useState, useMemo } from "react";
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
import { useSortableData, SORT_CONFIG } from "../hooks/useSortableData";

function ExerciseTable({ exercises, muscleGroups }) {
  const history = useHistory();
  const [toggle, setToggle] = useState([]);
  const { exerciseList, requestSort, sortConfig } = useSortableData(exercises);

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

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <body className="page--container">
      <table id="list">
        <tr className="table-head-row">
          <th></th>
          <th>
            <button
              type="button"
              onClick={() => requestSort(SORT_CONFIG.EXERCISE_NAME)}
              className={getClassNamesFor(SORT_CONFIG.EXERCISE_NAME)}
            >
              Excercise Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort(SORT_CONFIG.MUSCLE_GROUP_ID)}
              className={getClassNamesFor(SORT_CONFIG.MUSCLE_GROUP_ID)}
            >
              Muscle Group
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort(SORT_CONFIG.TOTAL_TIME)}
              className={getClassNamesFor(SORT_CONFIG.TOTAL_TIME)}
            >
              Total Time
            </button>
          </th>
        </tr>
        {exerciseList.map((exercise) => {
          return (
            <tr
              key={exercise.id}
              onClick={() => {
                handleToggle(exercise);
              }}
              className={exIDs.includes(exercise.id) ? "raw--selected" : ""}
            >
              <td alt={`Avatar n°${exercise.id}`}>
                <img
                  className="table--avatar"
                  src={exercise.exercise_picture_url}
                  alt={exercise.exercise_name}
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
