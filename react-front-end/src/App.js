import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import MuscleGroupList from "./components/MuscleGroupList";
import GenerateExercise from "./components/show/GenerateExercise";
import Workout from "./components/Workout";
import SavedWorkouts from "./components/SavedWorkouts";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import ExerciseTable from "./components/ExerciseTable";

const withRouter = (WrappedComponent) => (props) => {
  return (
    <Router>
      <WrappedComponent {...props} />
    </Router>
  );
};

const App = (props) => {
  const history = useHistory();
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]); // for muscle group selection
  const [muscleGroups, setMuscleGroups] = useState([]); // for initial rendering of the muscle groups
  const [generatedExercises, setExercises] = useState([]); // for rendering a list of generated exercises

  // handles the muscle group select and deselect feature on the muscle groups selection page
  const handleSelectMuscleGroup = (item) => {
    let newState = [...selectedMuscleGroups];
    //filter out the muscle group that has been selected
    if (newState.includes(item)) {
      const index = newState.indexOf(item);
      newState = newState.filter((element, position) => position !== index);
    } else {
      // add the selected muscle group
      newState = [...newState, item];
    }
    setSelectedMuscleGroups(newState);
  };

  // for rendering muscle groups for front page
  useEffect(() => {
    axios.get("/api/musclegroups").then((res) => {
      setMuscleGroups(res.data.muscleGroups);
    });
  }, []);

  // GET the list of exercises that match the selected muscle group ids
  const handleGenerateExercise = () => {
    // access endpoint/query with the state value
    const params = {
      muscleGroups: selectedMuscleGroups.map((group) => group.id),
    };
    axios.get("/api/exercises", { params }).then((res) => {
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
          <MuscleGroupList
            data={muscleGroups} //categoryData
            onClick={handleSelectMuscleGroup}
            selectedMuscleGroups={selectedMuscleGroups}
          />
          <div className="page--container">
            <GenerateExercise
              onClick={handleGenerateExercise}
              children={"Generate Exercises"}
            />
          </div>
        </Route>
        <Route path="/exercises">
          <ExerciseTable
            exercises={generatedExercises}
            muscleGroups={muscleGroups}
          />
        </Route>
        <Route path="/workout" component={Workout} />
        <Route path="/savedworkouts" component={SavedWorkouts} />
      </Switch>
      <Footer />
    </>
  );
};

export default withRouter(App);
