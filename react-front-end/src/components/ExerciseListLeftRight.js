import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CreateWorkoutButton from "./CreateWorkoutButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((name) => b.indexOf(name) === -1);
}

function intersection(a, b) {
  return a.filter((name) => b.indexOf(name) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TransferList({ exercises }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const exerciseNames = exercises.map((ex) => ex.exercise_name);
  console.log({ exerciseNames });
  const [left, setLeft] = React.useState([exerciseNames]);
  const [right, setRight] = React.useState([]);
  const history = useHistory();

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (name) => () => {
    const currentIndex = checked.indexOf(name);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(name);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (exerciseNames) =>
    intersection(checked, exerciseNames).length;

  const handleToggleAll = (exerciseNames) => () => {
    if (numberOfChecked(exerciseNames) === exerciseNames.length) {
      setChecked(not(checked, exerciseNames));
    } else {
      setChecked(union(checked, exerciseNames));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleCreateWorkout = () => {
    // history.push("/workout")
    axios
      .get("/api/workout")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const customList = (title, exerciseNames) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(exerciseNames)}
            checked={
              numberOfChecked(exerciseNames) === exerciseNames.length &&
              exerciseNames.length !== 0
            }
            indeterminate={
              numberOfChecked(exerciseNames) !== exerciseNames.length &&
              numberOfChecked(exerciseNames) !== 0
            }
            disabled={exerciseNames.length === 0}
            inputProps={{ "aria-label": "all exerciseNames selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(exerciseNames)}/${
          exerciseNames.length
        } selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {exerciseNames.map((name) => {
          const labelId = `transfer-list-all-item-${name}-label`;

          return (
            <ListItem
              key={name}
              role="listitem"
              button
              onClick={handleToggle(name)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                // primary={`Exercise: ID ${value + 1}`}
                primary={name}
              />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>{customList("Choices", left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList("Chosen", right)}</Grid>
      </Grid>

      <CreateWorkoutButton onClick={handleCreateWorkout} />
    </>
  );
}
