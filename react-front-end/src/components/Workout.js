import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Video from "./Video";
import Timer from "./Timer";
import { Button } from "./Button";
import Footer from "./pages/Footer";
import "./Workout.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Workout() {
  const { state } = useLocation();
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [selectedExercise, setSelectedExercise] = React.useState([]);
  const [videoURL, setVideoURL] = React.useState(null);

  const handleVideoURL = (video) => {
    setVideoURL(video);
  };

  const handleSaveWorkout = () => {
    const params = {
      exerciseIDs: data.map((ex) => ex.id),
      workoutName: document.getElementById("workoutname").value,
      workoutTime: data
        .map((obj) => obj.total_time)
        .reduce((total, num) => total + num, 0),
    };
    axios
      .post("/api/workout", params)
      .then(() => {
        console.log("Successfully saved your workout!");
        return true;
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  React.useEffect(() => {
    const params = {
      checked: state.checked,
    };
    axios
      .get("/api/workout", { params })
      .then((res) => {
        setData(res.data.exercises);
        setSelectedExercise(res.data.exercises);
        setVideoURL(res.data.exercises[0].exercise_video_url);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    data.length > 0 && (
      <>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Exercise Name</TableCell>
                <TableCell align="right">Time(m)</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">Muscle Group</TableCell>
                <TableCell align="right">Intensity</TableCell>
                <TableCell align="right">Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(
                ({
                  exercise_name,
                  total_time,
                  num_of_sets,
                  num_of_reps,
                  muscle_group_id,
                  intensity,
                  rating,
                  exercise_video_url,
                  title,
                  exercise_picture_url,
                  exercise_info,
                }) => (
                  <TableRow
                    key={exercise_name}
                    onClick={() => handleVideoURL(exercise_video_url)}
                  >
                    <IconButton edge="start">
                      <TableCell component="th" scope="row">
                        {exercise_name}
                      </TableCell>
                    </IconButton>
                    <TableCell align="right">{total_time}</TableCell>
                    <TableCell align="right">{num_of_sets}</TableCell>
                    <TableCell align="right">{num_of_reps}</TableCell>
                    <TableCell align="right">{title}</TableCell>
                    <TableCell align="right">{intensity}</TableCell>
                    <TableCell align="right">{rating}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Timer exerciseTimes={data.map((obj) => obj.total_time)} />
        <form className="save--workout">
          <label htmlFor="workoutname">Name your new workout: </label>
          <input
            id="workoutname"
            name="workoutname"
            type="text"
            placeholder="workout name"
          />

          <Button
            className="btns"
            buttonStyle="btn--go"
            buttonSize="btn--saved"
            href="/savedworkouts"
            onClick={handleSaveWorkout}
          >
            Save Workout
          </Button>
        </form>
        <Video videoURL={videoURL} />
        <Footer />
      </>
    )
  );
}
