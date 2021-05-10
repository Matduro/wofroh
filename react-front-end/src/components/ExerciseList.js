import React from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import CreateWorkoutButton from "./CreateWorkoutButton";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

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

export default function CheckboxListSecondary({ exercises }) {
  const history = useHistory();
  const classes = useStyles();
  const [generatedWorkout, setWorkout] = React.useState([]); // for rendering workout
  const [checked, setChecked] = React.useState([]);
  const exerciseNames = exercises.map((ex) => ex.exercise_name);
  const exerciseImages = exercises.map((ex) => ex.exercise_picture_url);
  console.log({ exerciseNames });
  console.log({ checked });
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
    const params = {
      checked
    };
    axios
      .get("/api/workout", { params })
      .then((res) => {
        // console.log(res);
        setWorkout(res.data.workout);
      })
      .catch((err) => {
        console.log({ err });
      });
    history.push("/workout")
  };

  return (
    <List dense className={classes.root}>
      {exerciseNames.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <CreateWorkoutButton onClick={handleCreateWorkout} />
    </List>
  );
}
