const express = require('express');
const router = express.Router();

// Define the route for creating a new booking
router.get('/', (req, res) => {
  // Implement your logic for creating a new booking here
  res.render('bookings', { title: 'user Report ' });
});

module.exports = router;

