const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register the model.
const Model = mongoose.model('trips');

// GET: /trips - Lists all trips
// The response must include the HTML status code
// and JSON message to the requesting client

const tripsList = async(req,res) => {
    const q = await Model
        .find({}) // No filter, returns all records
        .exec();

        // Uncomment the following line to show query results
        // on the console
        // console.log(q);

    if(!q){ // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return the resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList
};

// GET: /trips/:tripCode - Lists a single trip
// The response must include the HTML status code
// and JSON message to the requesting client

const tripsFindByCode = async(req,res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // Return a single record
        .exec();

        // Uncomment the following line to show query results
        // on the console
        // console.log(q);

    if(!q){ // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return the resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};