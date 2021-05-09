const router = require("express").router();

module.exports = (db) => {
  router.get("/exercises", (request, response) => {
    db.query(
      `
      SELECT * FROM exercise
      WHERE muscle_group_id IN ($1)
      ;`, [req.params.muscle_id[/*something*/], req.params[/*something2*/]]).then(data => {
        const exercises = data.rows;
        response.json({ exercises });
      }).catch(error => {
        response.status(500).json({ error: error.message })
      });
  });

  return router;
};

// SELECT Id, CompanyName, City, Country
//   FROM Supplier
//  WHERE Country IN ('USA', 'UK', 'Japan')



CREATE TABLE exercise (
  id SERIAL PRIMARY KEY NOT NLL,
  muscle_group_id INTEGER REFERENCES muscle_group(id) ON DELETE CASCADE,
  exercise_picture_url VARCHAR(255) NOT NULL,
  exercise_name VARCHAR(255) NOT NULL,
  exercise_info VARCHAR(900) NOT NULL,
  exercise_video_url VARCHAR(255) NOT NULL,
  total_time INTEGER NOT NULL,
  num_of_reps INTEGER NOT NULL,
  num_of_sets INTEGER NOT NULL,
  intensity INTEGER NOT NULL,
  rating INTEGER
);


