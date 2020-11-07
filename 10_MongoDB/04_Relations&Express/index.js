const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const Farm = require('./models/farm');
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost:27017/farmStand2', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Mongo connection open');
  })
  .catch(err => {
    console.log('Oh no, Mongo error occured');
    console.log(err);
  })

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// FARM ROUTES
// View all farms
app.get('/farms', async (req, res) => {
  const farms = await Farm.find({});
  res.render('farms/index', { farms });
})

// Create new farm
app.get('/farms/new', (req, res) => {
  res.render('farms/new');
})

app.post('/farms', async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.redirect('/farms');
})

// Create new product for a farm
app.get('/farms/:id/products/new', async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render('products/new', { categories, farm });
})

app.post('/farms/:id/products', async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const product = new Product({ name, price, category });
  farm.products.push(product);
  product.farm = farm;
  await farm.save();
  await product.save();
  res.redirect(`/farms/${id}`)
})

// View farm
app.get('/farms/:id', async (req, res) => {
  const farm = await Farm.findById(req.params.id).populate('products');
  res.render('farms/show', { farm });
})

// Delete farm
app.delete('/farms/:id', async (req, res) => {
  const farm = await Farm.findByIdAndDelete(req.params.id);
  
  res.redirect('/farms');
})

// PRODUCT ROUTES
const categories = ['fruit','vegetable','dairy'];

// View all products
app.get('/products', async (req, res) => {
  const { category } = req.query;
  if(category){
    const products = await Product.find({ category: category });
    res.render('products/index', { products, category });
  } else {
    const products = await Product.find({});
    res.render('products/index', { products, category: 'All' });
  }
})

// Create new product
app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
})

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
})

// View product
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate('farm', 'name');
  res.render('products/show', { product });
})

// Edit product
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product, categories });
})

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
  res.redirect(`/products/${product._id}`);
})

// Delete product
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect('/products');
})

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})