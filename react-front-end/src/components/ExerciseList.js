import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import CreateWorkoutButton from "./CreateWorkoutButton";
import Timer from "./Timer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxListSecondary({ exercises }) {
  const history = useHistory();
  const classes = useStyles();
  const [generatedWorkout, setWorkout] = React.useState([]); // for rendering workout
  const [checked, setChecked] = React.useState([]);
  const exerciseNames = exercises.map((ex) => ex.exercise_name);
  const exerciseTimes = exercises.map((ex) => ex.total_time);
  const exerciseImages = exercises.map((ex) => ex.exercise_picture_url);
  // console.log({ exercises });
  // console.log({ checked });

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCreateWorkout = () => {
    history.push("/workout", {
      checked: checked.map((obj) => obj.exercise_name),
    });
  };

  return (
    <List dense className={classes.root}>
      {exercises.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.exercise_name}`;
        return (
          <table>
            <ListItem key={value.exercises_name} button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value.exercises_name}`}
                  src={value.exercise_picture_url}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${value.exercise_name}`} />
              <tr>
                <ListItemText>{`Exercise Time: ${value.total_time}`}</ListItemText>
              </tr>
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </table>
        );
      })}
      <Timer exerciseTimes={checked.map((ex) => ex.total_time)} />
      <CreateWorkoutButton onClick={handleCreateWorkout} />
    </List>
  );
}

// const handleGenerateExercise = () => {
//   // access endpoint/query with the state value
//   const params = {
//     muscleGroups: selectedMuscleGroups.map((group) => group.id),
//   };
//   axios
//     .get("/api/exercises", { params })
//     //.then((res) => console.log({ res }));
//     .then((res) => {
//       setExercises(res.data.exercises);
//     });
//   // request from server
//   // add responce to state

//   //redirects to exercises page
//   history.push("/exercises");
//   console.log({ generatedExercises });
// };

// const handleCreateWorkout = () => {

//   const params = {
//     checked,
//   };
//   axios
//     .get("/api/workout", { params })
//     .then((res) => {
//       // console.log(res);
//       setWorkout(res.data.workout);
//     })
//     .catch((err) => {
//       console.log({ err });
//     });
//   history.push("/workout");

//   history.push("/workout", { checked })

// };
