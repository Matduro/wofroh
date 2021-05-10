import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function Workout() {
  const classes = useStyles();
  const [data, setData] = React.useState([])
  const { state } = useLocation();
  // const [selectedExercise, setSelectedExercise] = useState("")

  React.useEffect(() => {
    console.log("state=", state);
    const params = {
      checked: state.checked
    };
      axios
      .get("/api/workout", { params })
      .then((res) => {
        console.log("response=res", res);
        setData(res.data.exercises);
      })
      .catch((err) => {
        console.log({ err });
      });

    },[])
    
  let my_rows = data.map((item)=> ({ name: item.exercise_name, video: item.exercise_video_url}))
  console.log("my rows=", my_rows, data)

  return data.length > 0 && (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Exercise Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Sets</TableCell>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Muscle Group</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({exercise_name, exercise_video_url}) => (
            <TableRow key={exercise_name} > 
              <TableCell component="th" scope="row">
                {exercise_name}
              </TableCell>
              {/* <TableCell align="right">{row.video}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
