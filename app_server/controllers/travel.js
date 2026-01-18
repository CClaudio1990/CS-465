/* GET Travel view */
const travel = (req, res) => {
    res.render('travel', {title: 'Traveler Getaways'});
};

module.exports = {
    travel
};