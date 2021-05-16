import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
    // background: 'linear-gradient(45deg, #514e4e 30%, #1e120d 90%)',
    background: "#242424;",
    border: 1,
    boxShadow: "",
    color: "white",
    height: 30,
    width: "100%",
    verticalAlign: "middle",
  },
  header: {
    textAlign: "center",
    paddingTop: "4px",
  },
}));

function Timer({ exerciseTimes }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className={classes.header}>
        {`Your total workout time is:  ${exerciseTimes.reduce(
          (total, num) => total + num,
          0
        )} min`}
      </h4>
    </div>
  );
}

export default Timer;
