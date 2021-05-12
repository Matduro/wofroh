import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
    // background: 'linear-gradient(45deg, #514e4e 30%, #1e120d 90%)',
    background:
      "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgb(18 13 14 / 30%)",
    color: "white",
    height: 65,
    width: "100%",
  },
}));

export default function GenerateExercise({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
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
        Generate Exercises!
      </Button>
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
// "& > *": {
//   margin: theme.spacing(1),
// },
//   },
// }));

// export default function GenerateExercise({ onClick }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>

//       <Button style={{ margin: '0 auto', display: "flex" }} variant="outlined" color="primary" onClick={onClick}>
//         Generate Exercises!
//       </Button>
//     </div>
//   );
// }
