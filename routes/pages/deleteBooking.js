const express = require('express');
const router = express.Router();

// Define the route for creating a new booking
router.get('/', (req, res) => {
  // Implement your logic for creating a new booking here
  res.render('delete', { title: 'Delete Booking' });
});
router.get('/delete-booking', async (req, res) => {
  try {
    // Fetch all booking data from MongoDB
    const bookings = await Booking.find();

    // Render the delete page template and pass the data
    res.render('delete', { bookings });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

module.exports = router;