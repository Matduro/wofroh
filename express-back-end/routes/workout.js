const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    //query the db for all exercises and join muscle_groups table to get muscle group names to render on workouts page
    db.query(
      `SELECT *, muscle_groups.title, exercises.id as id
    FROM exercises
    JOIN muscle_groups ON muscle_groups.id = muscle_group_id
    WHERE exercises.id = ANY($1::int[])
    ;`,
      [request.query.exerciseIDs.map(Number)] // <= shorthand for .map(num => Number(num))
    )
      .then((data) => {
        // console.log("JOINED", data.rows);
        const exercises = data.rows;
        response.json({ exercises });
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  router.get("/saved", (request, response) => {
    // pulls all saved workouts
    // TODO: implement get request for saved workouts matching user id
    db.query(`SELECT * FROM workouts;`)
      .then((res) => response.json(res.rows))
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  router.get("/saved/exercises", (request, response) => {
    // console.log("MY REQUEST", { request });
    // pulls exercises matching given workout
    db.query(`SELECT * FROM workout_exercises WHERE workout_id = $1;`, [
      request.query.id,
    ])
      .then((res) => response.json(res.rows))
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  router.post("/", (request, response) => {
    // POST for our saving workout feature
    const exerciseIDs = request.body.exerciseIDs;
    const workoutName = request.body.workoutName;
    const workoutTime = request.body.workoutTime;
    // console.log({ exerciseIDs });
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
        /////////////////////
        /// TODO STRETCH: for what we're trying to achieve,
        /// inserting an array into postgreSQL is not good practice.
        /// We should map over the array and create a query string,
        /// then concatenate it with the INSERT INTO statement, and db.query it.
        /////////////////////
        // ALTERNATE SOLUTION:
        //   pg.query(
        //     "INSERT INTO testtable (id, name) SELECT * FROM UNNEST ($1::int[], $2::text[])",
        //     [
        //         [1, 2, 3],
        //         ["Jack", "John", "Jill"],
        //     ]
        // )
        /////////////////////
        return db.query(
          `
     INSERT INTO workout_exercises (
     exercise_id, workout_id)
     VALUES ($1, $2) RETURNING *;`,
          [exerciseIDs, res.rows[0].id]
        );
      })
      .then((res) => {
        // TODO USE THIS RESPONSE DATA FOR SOME FEATURE
        // const savedWorkout = res.rows[0].id;
        // response.json({ savedWorkout });
        response.json("workout saved");
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  router.post("/delete", (request, response) => {
    const workoutID = Number(request.body.params.id);

    db.query(`DELETE FROM workouts WHERE workouts.id = $1`, [workoutID])
      .then(() => {
        console.log("Workout Deleted!");
        response.json({ message: "Deleted" });
      })
      .then(() => {
        console.log("WORKOUTID IN THE .THEN(): ", workoutID);
        return db.query(
          `DELETE FROM workout_exercises WHERE workout_id = $1::integer`,
          [workoutID]
        );
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  return router;
};

//insert new row into workout table
//use workout id to add exercise id's
//2 queries happen one after another
//two .then's
