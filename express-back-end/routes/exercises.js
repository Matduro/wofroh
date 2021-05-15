const router = require("express").Router();

module.exports = (db) => {
  // Query the excercises that match the muscle group id selected by user on musclegroups selection page
  router.get("/", (request, response) => {
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

/// FOR REFERENCE AND FUTURE IMPLEMENTATION

// Query examples:
//ids = [1,3,4];
//var q = client.query('SELECT Id FROM MyTable WHERE Id = ANY($1::int[])',[ids]);

// `
// SELECT *
// FROM exercises
// WHERE exercise_name = ANY($1::text[])

// TODO FIX THE ABOVE QUERY FOR MUSCLE GROUP ID SO THAT WE CAN GET THE MUSCLE GROUP NAMES IN OUR RESPONCE
// `SELECT *, muscle_groups.title
// FROM exercises
// JOIN muscle_groups ON muscle_groups.id = muscle_group_id
// console.log("MUSCLE GROUPS", request.query.muscleGroups.map(Number));
