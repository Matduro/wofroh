const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    // Query examples:
    //ids = [1,3,4];
    //var q = client.query('SELECT Id FROM MyTable WHERE Id = ANY($1::int[])',[ids]);
    // `
    // SELECT *
    // FROM exercises
    // WHERE exercise_name = ANY($1::text[])
    // ;`
    console.log("QUERY", request.query.exerciseIDs.map(Number));
    db.query(
      `SELECT *, muscle_groups.title
    FROM exercises
    JOIN muscle_groups ON muscle_groups.id = muscle_group_id
    WHERE exercises.id = ANY($1::int[])
    ;`,
      [request.query.exerciseIDs.map(Number)]
    )
      .then((data) => {
        const exercises = data.rows;
        console.log({ data });
        response.json({ exercises });
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  router.get("/saved", (request, response) => {
    db.query(`SELECT * FROM workouts;`)
      .then((res) => response.json(res.rows))
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
     excercise_id, workout_id)
     VALUES ($1, $2) RETURNING *;`,
          [exerciseIDs, res.rows[0].id]
        );
      })
      .then((res) => {
        const savedWorkout = res.rows[0].id;
        response.json({ savedWorkout });
      })
      .catch((error) => {
        // console.log({ error });
        response.status(500).json({ error: error.message });
      });
  });

  return router;
};

//insert new row into workout table
//use workout id to add exercise id's
//2 queries happen one after another
//two .then's
