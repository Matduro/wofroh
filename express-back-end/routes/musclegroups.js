const router = require("express").Router();

module.exports = (db) => {
  // Query the muscle groups data to populate musclegroups selection page
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT * FROM muscle_groups
      ;`
    )
      .then((data) => {
        const muscleGroups = data.rows;
        response.json({ muscleGroups });
      })
      .catch((error) => {
        response.status(500).json({ error: error.message });
      });
  });

  return router;
};
