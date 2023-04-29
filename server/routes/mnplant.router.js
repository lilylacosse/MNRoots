const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/:columnToOrderBy", rejectUnauthenticated, (req, res) => {
  const columnToOrderBy = req.params.columnToOrderBy;
  // console.log(`req.params:`, req.params.columnToOrderBy);
  const sqlText = `select * from native_plants order by ${columnToOrderBy} asc`;
  pool
    .query(sqlText)
    .then((response) => res.send(response.rows))
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
