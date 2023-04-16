const axios = require("axios");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const fetch = import("node-fetch");
//  https GET request to Trefle API to retrieve plant list to server to user based on user input
// router.get("/", (req, res) => {
//   axios
//     .get("https://trefle.io/api/v1/plants?token=TREFLE_API_KEY")
//     .then((response) => {
//       console.log(`trefle data:`, response.data);
//       return res.send(response.data);
//     })
//     .catch((err) => {
//       console.log(`get TREFLE PLANT LIST error:`, err);
//       res.sendStatus(500);
//     });
// });

async () => {
  const response = await fetch(
    "https://trefle.io/api/v1/plants?token=TREFLE_API_KEY"
  );
  const json = await response.json();
  console.log(json);
};

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
