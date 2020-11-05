const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Campground = require('./models/campground');
const campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
})

// View campgrounds
app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', { campgrounds });
})

// Add new campground
app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new');
})

app.post('/campgrounds', async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
})

// View campground
app.get('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render('campgrounds/show', { campground })
})

// Edit campground
app.get('/campgrounds/:id/edit', async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render('campgrounds/edit', { campground })
})

app.put('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findByIdAndUpdate(req.params.id, { ...req.body.campground });
  res.redirect(`/campgrounds/${campground._id}`);
})

// Delete campground
app.delete('/campgrounds/:id', async (req, res) => {
  await Campground.findByIdAndDelete(req.params.id);
  res.redirect('/campgrounds');
})

app.listen(3000, () => {
  console.log('Serving on port 3000')
})