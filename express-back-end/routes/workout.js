const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (request, response) => {
    console.log("request.query.checked", request.query.checked);
    // response.send("it worked!");
    //ids = [1,3,4];
    //var q = client.query('SELECT Id FROM MyTable WHERE Id = ANY($1::int[])',[ids]);

    db.query(
      `
      SELECT * FROM exercises
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

  return router;
};
