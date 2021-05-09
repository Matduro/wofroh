const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    // console.log(request.query.categories.map(Number));
    // response.send("it worked!");
    //ids = [1,3,4];
    //var q = client.query('SELECT Id FROM MyTable WHERE Id = ANY($1::int[])',[ids]);

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
