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
      // Save plant ids generated by first get
      const plantIDs = [];
      //  console.log(`trefle data:`, response.data.data);
      const plants = response.data.data;
      for (let plant of plants) {
        // console.log(`plant.id:`, plant.id);
        plantIDs.push(plant.id);
      }
      console.log(`plantIDs:`, plantIDs);
      for (let id of plantIDs) {
        // console.log(`plant ID:`, id);
        axios
          .get(
            `https://trefle.io/api/v1/species/${id}?token=${process.env.TREFLE_API_KEY}`
          )
          .then((response) => {
            // console.log(`Specific Plant Data:`, response.data.data);
            plantData = response.data.data;
            plantDataForDB = {
              plant_api_id: plantData.id,
              common_name: plantData.common_name,
              images: plantData.images,
              specifications: plantData.specifications,
              growth: plantData.growth,
            };
            console.log(`plantDataForDB:`, plantDataForDB);
            const sqlText = `INSERT INTO "native_plants" ("plant_api_id","common_name","images","specifications","growth") VALUES ($1, $2, $3, $4, $5)`;
            pool
              .query(sqlText, [
                plantData.id,
                plantData.common_name,
                plantData.images,
                plantData.specifications,
                plantData.growth,
              ])
              .then((response) => res.sendStatus(201))
              .catch((err) => {
                console.log(`err posting Trefle API data to DB:`, err);
              });
          });
      }
      // return res.sendStatus(201);
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
