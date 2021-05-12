import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import CreateWorkoutButton from "./CreateWorkoutButton";
import Timer from "./Timer";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "80%",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  listItemText: {
    marginLeft: "100px",
    marginRight: "100px",
    minWidth: "60px",
  },
  exercise: {
    minWidth: "60px",
    marginLeft: "100px",
    marginRight: "100px",
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
            <ListItem
              className={classes.exercise}
              key={value.exercises_name}
              button
            >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value.exercises_name}`}
                  src={value.exercise_picture_url}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${value.exercise_name}`} />
              <tr>
                <ListItemText
                  className={classes.listItemText}
                >{`Exercise Time: ${value.total_time}`}</ListItemText>
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
      {/* <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: "20vh" }}
      > */}
      <Timer exerciseTimes={checked.map((ex) => ex.total_time)} />
      <Typography
        component="span"
        variant="subtitle1"
        color="inherit"
        className={classNames(classes.imageTitle)}
      >
        <CreateWorkoutButton onClick={handleCreateWorkout} />
      </Typography>
      {/* </Grid> */}
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
