import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
    // background: 'linear-gradient(45deg, #514e4e 30%, #1e120d 90%)',
    background: "rgb(163, 219, 163)",
    // "linear-gradient(90deg, rgb(163, 219, 163) 0%, rgb(95, 182, 95) 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgb(18 13 14 / 30%)",
    color: "white",
    height: 65,
    marginTop: "15px",
    marginBottom: "64px",
    // width: "55vw",
    "&:hover": {
      background: "rgb(95, 182, 95)",
      transition: "all 0.3s ease-out",
    },
  },
}));

export default function GenerateExercise({ onClick, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        data-cy="generate"
        style={{
          border: "none",
          height: "100%",
          width: "100%",
          color: "white",
          margin: "0 auto",
          display: "flex",
        }}
        variant="outlined"
        color="primary"
        onClick={onClick}
      >
        <h3>{children}</h3>
      </Button>
    </div>
  );
}
