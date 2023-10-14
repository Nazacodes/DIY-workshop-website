const express = require('express');
const router = express.Router();

// Define the route for creating a new booking
router.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  // Implement your logic for creating a new booking here
  res.render('about', { title: 'About page' });
});



module.exports = router;