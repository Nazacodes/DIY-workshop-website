const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/booking';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error(err);
});


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

const bookingRouter = require('./routes/pages/booking');
const createBookingRouter = require('./routes/pages/createBooking');
const deleteBookingRouter = require('./routes/pages/deleteBooking');
const showBookingsRouter = require('./routes/pages/showBooking');
const bookingReportRouter = require('./routes/pages/bookingReport');
const timetable = require('./routes/pages/timetable');
const aboutRouter = require('./routes/pages/about');
const helpRouter = require('./routes/pages/help');
const modifyBookingRouter = require('./routes/pages/modify');
const successRouter = require('./routes/pages/success');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('partial', __dirname + 'views')
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/public', express.static('public'));
app.use('/success', successRouter);
app.use('/', indexRouter);
app.use('/bookings', bookingRouter);
app.use('/timetable', timetable);
app.use('/modify-booking', modifyBookingRouter);
app.use('/users', usersRouter);
app.use('/create-booking', createBookingRouter);
app.use('/delete-booking', deleteBookingRouter);
app.use('/show-booking', showBookingsRouter);
app.use('/booking-report', bookingReportRouter);
app.use (bodyParser.urlencoded ({extended: true}));
app.use('/about', aboutRouter);
app.use('/help', helpRouter);
const Booking = require('./models/booking');
app.get('/timetable', async (req, res) => {
  try {
    // Fetch all booking data from MongoDB
    const bookings = await Booking.find();

    // Render the delete page template and pass the data
    res.render('show.ejs', { bookings });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/create', async (req, res) => {
  try {
    const{ name, email, date,} = req.body;
     const newBooking = new Booking({ name, email, date,});
    await newBooking.save();
    res.redirect('/success');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







module.exports = app;
  