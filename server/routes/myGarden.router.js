const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// POST route - adds newly selected plant to users_favs in db
router.post("/:plantId", rejectUnauthenticated, (req, res) => {
  // TEST QUERY
  let sqlQuery = `INSERT INTO "users_favs" (user_id, plant_id)
  VALUES($1, $2)`;
  let queryValues = [req.user.id, req.params.plantId];

  pool
    .query(sqlQuery, queryValues)
    .then((response) => res.sendStatus(201))
    .catch((err) => {
      console.log(`err:`, err);
      res.sendStatus(500);
    });
});

// GET route - retrieves users_favs from db based on user ID
router.get("/", rejectUnauthenticated, (req, res) => {
  // TEST QUERY
  let sqlQuery = `SELECT * FROM users_favs 
  JOIN native_plants ON users_favs.plant_id = native_plants.id
  WHERE user_id = $1`;
  let queryValues = [req.user.id];

  pool
    .query(sqlQuery, queryValues)
    .then((response) => res.send(response.rows))
    .catch((err) => res.sendStatus(500));
});

// DELETE route - deletes selected plant from user_favs table in db
// dependent on user id
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // TEST QUERY
  console.log(`req.params.id:`, req.params.id);
  let sqlQuery = `DELETE FROM "users_favs" 
  WHERE user_id = $1 AND plant_id = $2 `;
  let queryValues = [req.user.id, req.params.id];

  pool
    .query(sqlQuery, queryValues)
    .then((response) => res.sendStatus(200))
    .catch((err) => res.sendStatus(500));
});

module.exports = router;
