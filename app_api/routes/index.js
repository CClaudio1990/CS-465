const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// Define the route for the trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList); // GET method routes tripList

// GET Method routes tripsFindByCode
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;
