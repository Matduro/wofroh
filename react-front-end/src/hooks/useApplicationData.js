import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    exercises: [],
  });

  // Initial data request from the database
  useEffect(() => {
    Promise.all([axios.get("/api/exercises")]).then(([{ data: exercises }]) => {
      setState((prev) => ({
        ...prev,
        exercises,
      }));
    });
  }, []);

  return {
    state,
  };
}
