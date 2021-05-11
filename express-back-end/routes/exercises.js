const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    // console.log(
    //   "should be our muscleGroups",
    //   request.query.muscleGroups.map(Number)
    // );
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
      WHERE muscle_group_id = ANY($1::int[])
      ;`,
      [request.query.muscleGroups.map(Number)]
    )
      .then((data) => {
        const exercises = data.rows;
        response.json({ exercises });
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  return router;
};

// CREATE TABLE exercise (
//   id SERIAL PRIMARY KEY NOT NLL,
//   muscle_group_id INTEGER REFERENCES muscle_group(id) ON DELETE CASCADE,
//   exercise_picture_url VARCHAR(255) NOT NULL,
//   exercise_name VARCHAR(255) NOT NULL,
//   exercise_info VARCHAR(900) NOT NULL,
//   exercise_video_url VARCHAR(255) NOT NULL,
//   total_time INTEGER NOT NULL,
//   num_of_reps INTEGER NOT NULL,
//   num_of_sets INTEGER NOT NULL,
//   intensity INTEGER NOT NULL,
//   rating INTEGER
// );
