import React from "react";

export default function ExerciseList({ exercises }) {
  const exerciseList = exercises.map((exercise) => {
    return (
      <table style={{ width: "100%" }}>
        <tr>
          <td>Group ID</td>
          <td>Exercise name</td>
          <td>info</td>
        </tr>
        <img
          src={exercise.exercise_picture_url}
          alt={""}
          style={{ width: "100px", height: "100px" }}
        />
        <tr>
          <th>{exercise.muscle_group_id}</th>
          <th>{exercise.exercise_name}</th>
          <th>{exercise.exercise_info}</th>
        </tr>
      </table>
    );
  });
  return exerciseList;
}
