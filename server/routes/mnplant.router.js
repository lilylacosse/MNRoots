const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const sqlText = `select * from native_plants`;
  pool
    .query(sqlText)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(`GET all plants error:`, err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
