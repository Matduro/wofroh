import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import GenerateExercise from "./components/GenerateExercise";
import ExerciseList from "./components/ExerciseList";
// import categoryData from "./components/testData/categoryData";

const withRouter = (WrappedComponent) => (props) => {
  return (
    <Router>
      <WrappedComponent {...props} />
    </Router>
  );
};

const App = (props) => {
  const history = useHistory();
  // console.log({ props });
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]); // for muscle group selection
  const [muscleGroups, setMuscleGroups] = useState([]); // for initial rendering of the muscle groups

  // const fetchData = () => {
  //   axios
  //     .get("/api/data") // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data); // The entire response from the Rails API

  //       console.log(response.data.message); // Just the message
  //       this.setState({
  //         message: response.data.message,
  //       });
  //     });
  // };

  const handleSelectMuscleGroup = (item) => {
    // console.log({ item });
    let newState = [...selectedMuscleGroups];
    if (newState.includes(item)) {
      const index = newState.indexOf(item);
      // newState = newState.splice(index, 1);
      newState = newState.filter((element, position) => position !== index);
    } else {
      newState = [...newState, item];
    }
    setSelectedMuscleGroups(newState);
  };
  console.log({ selectedMuscleGroups });

  // muscle groups for front page
  useEffect(() => {
    axios.get("/api/musclegroups").then((res) => {
      console.log({ res });
      setMuscleGroups(res.data.muscleGroups);
    });
  }, []);
  // console.log({ muscleGroups });

  const handleGenerateExercise = () => {
    // access endpoint/query with the state value
    const params = {
      muscleGroups: selectedMuscleGroups.map((cat) => cat.id),
    };
    axios.get("/api/exercises", { params }).then((res) => console.log({ res }));
    // request from server
    // add responce to state

    //redirects to exercises page
    history.push("/exercises");
  };

  return (
    <>
      <NavBar />

      <Switch>
        <Route exact={true} path="/">
          <CategoryList
            data={muscleGroups} //categoryData
            onClick={handleSelectMuscleGroup}
            selectedMuscleGroups={selectedMuscleGroups}
          />

          <GenerateExercise onClick={handleGenerateExercise} />
        </Route>
        <Route path="/exercises" component={ExerciseList} />
        <Route path="/workout" component={ExerciseList} />
      </Switch>
    </>
  );
};

export default withRouter(App);
