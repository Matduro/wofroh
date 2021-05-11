import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    
  },
}));

export default function GenerateExercise({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button style={{margin: '0 auto', display: "flex"}} variant="outlined" color="primary" onClick={onClick}>
        Generate Exercises!
      </Button>
    </div>
  );
}
