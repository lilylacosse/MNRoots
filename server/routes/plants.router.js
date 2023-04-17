const axios = require("axios");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//  https GET request to Trefle API to retrieve plant list to server to user based on user input
router.get("/", (req, res) => {
  axios
    .get(
      `https://trefle.io/api/v1/distributions/min/plants?filter[establishment]=native&token=${process.env.TREFLE_API_KEY}`
    )
    .then((response) => {
      console.log(`trefle data:`, response.data);
      return res.send(response.data);
    })
    .catch((err) => {
      console.log(`get TREFLE PLANT LIST error:`, err);
      res.sendStatus(500);
    });
});

router.get("/spec", (req, res) => {
  axios
    .get(
      `https://trefle.io/api/v1/species/11971?token=${process.env.TREFLE_API_KEY}`
    )
    .then((response) => {
      console.log(`trefle data:`, response.data);
      return res.send(response.data);
    })
    .catch((err) => {
      console.log(`get TREFLE PLANT LIST error:`, err);
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
