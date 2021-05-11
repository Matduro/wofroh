const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    // console.log("request.query.checked", request.query.checked);
    // response.send("it worked!");
    //ids = [1,3,4];
    //var q = client.query('SELECT Id FROM MyTable WHERE Id = ANY($1::int[])',[ids]);
    // `
    // SELECT *, muscle_groups.title as muscle_group_name
    // FROM exercises
    // JOIN muscle_groups ON exercises.id = muscle_group_id
    // WHERE muscle_group_id = ANY($1::int[])
    // ;`
    db.query(
      `
      SELECT *
      FROM exercises
      WHERE exercise_name = ANY($1::text[])
      ;`,
      [request.query.checked]
    )
      .then((data) => {
        console.log("data:", { data });
        const exercises = data.rows;
        response.json({ exercises });
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  router.post("/", (request, response) => {
    const exerciseIDs = request.body.exerciseIDs;
    const workoutName = request.body.workoutName;
    const workoutTime = request.body.workoutTime;
    // console.log("the query", exerciseIDs, workoutName, workoutTime, ["1", "2"]);

    db.query(
      `
     INSERT INTO workouts (
     name, workout_time)
     VALUES (
      $1, $2
      )
       RETURNING id;`,
      [workoutName, workoutTime]
    )
      .then((res) => {
        // console.log("res from first query: ", res);
        db.query(
          `
     INSERT INTO workout_exercises (
     excercise_id, workout_id)
     VALUES (
     $1, $2)
      RETURNING id;`,
          [exerciseIDs, res.rows[0].id]
        );
      })
      .then((res) => {
        console.log("*********Saved******Workout: ", res);
        // const savedWorkout = res.rows[0].id;
        // response.json({ savedWorkout });
      })
      .catch((error) => {
        console.log({ error });
        response.status(500).json({ error: error.message });
      });
  });

  return router;
};

//insert new row into workout table
//use workout id to add exercise id's
//2 queries happen one after another
//two .then's
