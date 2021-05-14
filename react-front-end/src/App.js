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
// import ExerciseList from "./components/ExerciseList";
import Workout from "./components/Workout";
import SavedWorkouts from "./components/SavedWorkouts";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import Table from "./components/Table";

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
  const [generatedExercises, setExercises] = useState([]); // for rendering a list of generated exercises

  const handleSelectMuscleGroup = (item) => {
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

  // muscle groups for front page
  useEffect(() => {
    axios.get("/api/musclegroups").then((res) => {
      setMuscleGroups(res.data.muscleGroups);
    });
  }, []);

  const handleGenerateExercise = () => {
    // access endpoint/query with the state value
    const params = {
      muscleGroups: selectedMuscleGroups.map((group) => group.id),
    };
    axios.get("/api/exercises", { params }).then((res) => {
      console.log("res.data.exercises:  ", res.data.exercises);
      setExercises(res.data.exercises);
    });

    //redirects to exercises list page
    history.push("/exercises");
  };

  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/musclegroups">
          <CategoryList
            data={muscleGroups} //categoryData
            onClick={handleSelectMuscleGroup}
            selectedMuscleGroups={selectedMuscleGroups}
          />

          <GenerateExercise
            onClick={handleGenerateExercise}
            children={"Generate Exercises"}
          />
        </Route>
        <Route path="/exercises">
          <Table exercises={generatedExercises} muscleGroups={muscleGroups} />
        </Route>
        <Route path="/workout" component={Workout} />
        <Route path="/savedworkouts" component={SavedWorkouts} />
        {/* <Route path="/video" component={Video} /> */}
      </Switch>
      <Footer />
    </>
  );
};

export default withRouter(App);
