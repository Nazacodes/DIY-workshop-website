const express = require('express');
const router = express.Router();


// Define the route for creating a new booking
router.get('/', (req, res) => {
  // Implement your logic for creating a new booking here
  res.render('create', { title: 'Create Booking' });
});
// Import the Booking model

module.exports = router;


