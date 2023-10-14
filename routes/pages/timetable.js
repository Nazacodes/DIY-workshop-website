const express = require('express');
const router = express.Router();
const Booking = require('../../models/booking');

// GET /timetable
router.get('/timetable', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.render('show', { bookings });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;