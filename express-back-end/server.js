// load .env data into process.env
require("dotenv").config();
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const { Pool, Client } = require("pg");
const dbParams = require("./lib/db.js");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

const pool = new Pool(dbParams);

// TODO complete the below resources routes
// require the routes for each resources
const loginRoutes = require("./routes/login");
const exercisesApiRoutes = require("./routes/exercises");
const muscleGroupsApiRoutes = require("./routes/musclegroups");
const workoutApiRoutes = require("./routes/workout");
// const saveWorkoutApiRoutes = require("./routes/saveWorkout");

// mount all resources routes
App.use("/login", loginRoutes(pool));
App.use("/api/exercises", exercisesApiRoutes(pool));
App.use("/api/musclegroups", muscleGroupsApiRoutes(pool));
App.use("/api/workout", workoutApiRoutes(pool));
//App.use("/api/workout", saveWorkoutApiRoutes(pool));

// Sample GET route
// App.get("/api/data", (req, res) =>
//   res.json({
//     message: "Seems to work!",
//   })
// );

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
