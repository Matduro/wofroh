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
    justifyContent: "space-evenly",
    width: "100%",
    maxWidth: "80%",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  spacingElements: {
    justifyContent: "space-between",
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
  listItemText: {},
  exercise: {
    minWidth: "60px",
    justifyContent: "space-around",
  },
  tdName: {
    width: "20%",
  },
  table: {
    width: "100%",
  },
  tdTime: {
    width: "30%",
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
      checked: checked.map((obj) => obj.muscle_group_id),
    });
  };

  return (
    <List dense className={classes.root}>
      <table className={classes.table}>
        <tbody className={classes.spacingElements}>
          {exercises.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value.exercise_name}`;
            return (
              <tr>
                <ListItem
                  className={classes.exercise}
                  key={value.exercises_name}
                  button
                >
                  <td className={classes.tdName}>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value.exercises_name}`}
                        src={value.exercise_picture_url}
                      />
                    </ListItemAvatar>
                  </td>
                  <td className={classes.tdName}>
                    <ListItemText
                      id={labelId}
                      primary={`${value.exercise_name}`}
                    />
                  </td>
                  <td className={classes.tdTime}>
                    <ListItemText
                      className={classes.listItemText}
                    >{`Minutes: ${value.total_time}`}</ListItemText>
                  </td>
                  {/* <td className={classes.td}> */}
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemSecondaryAction>
                  {/* </td> */}
                </ListItem>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Timer exerciseTimes={checked.map((ex) => ex.total_time)} />
      <CreateWorkoutButton onClick={handleCreateWorkout} />
    </List>
  );
}
