const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET route - retrieves user notes from user table in db based on user id
router.get("/", rejectUnauthenticated, (req, res) => {
  // TEST QUERY
  let sqlQuery = `SELECT "notes" FROM "user"
  WHERE "id" = $1`;
  let queryValues = [req.user.id];

  pool
    .query(sqlQuery, queryValues)
    .then((response) => {
      // console.log(`notes get response:`, response.rows[0]);
      res.send(response.rows[0]);
    })
    .catch((err) => res.sendStatus(500));
});

// PUT route - updates notes based on user id in the user table
router.put("/", rejectUnauthenticated, (req, res) => {
  let sqlQuery = `UPDATE "user" SET notes=$1 
  WHERE id = $2`;
  let queryValues = [req.body.notes, req.user.id];

  pool
    .query(sqlQuery, queryValues)
    .then((response) => res.sendStatus(200))
    .catch((err) => res.sendStatus(500));
});

module.exports = router;
