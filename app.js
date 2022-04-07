var express = require('express');
var app = express();
require('dotenv').config();
var router = express.Router();
var engines = require('consolidate');
var ejs = require('ejs');
var mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect.js');
const itemModel = require('./model/Inventory.js');

var PORT = 3000;

//Rendering Engine
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//GET requests to html files
app.get('/', (req, res) => {
  res.render('index.ejs');
})

//Gets documents from database 
//and sends the request through ejs as a response
app.get('/view', (req, res) => {
  itemModel.find((err, data) => {
    if (!err) {
      res.render('view.ejs', { dataArray : data });
    } else {
      console.log('Error: ' + err);
    }
  });
})

//Sort based on either quantity or category
app.get('/view/sort', (req, res) => {
  let optionSelected = req.query.options;
  if (optionSelected === 'Quantity') {
    itemModel.find((err, data) => {
      if (!err) {
        res.render('view.ejs', {dataArray : data})
      } 
    })
    .sort({ Quantity : -1});
  } else if (optionSelected === 'Category') {
    itemModel.find((err, data) => {
      if (!err) {
        res.render('view.ejs', {dataArray : data})
      } 
    })
    .sort({ Category : -1});
  } else {
    res.redirect('/view');
  }
})

//GET request for item deletion
app.get('/delete/:id', (req, res) => {
  itemModel.findOneAndDelete({UPC : req.params.id}, (err) => {
    if (err) {
      console.log(err);
    }
  })
  res.redirect('/view');
})

//POST request to add new item
app.post('/add', (req, res) => {
  var newItem = new itemModel({
    Name : req.body.name, 
    UPC : req.body.upc, 
    MPN : req.body.mpn,
    Quantity : req.body.quantity,
    Image: req.body.image,
    Category : req.body.category
  })
  newItem.save((err) => {
    if (err) {
      console.log(err);
    }
  })
  res.redirect('/view');
})

//POST request to update document in database
app.post('/update/:id', (req, res) => {
  itemModel.findOneAndUpdate({UPC : req.params.id}, {
    Name : req.body.name,
    UPC : req.body.upc,
    MPN : req.body.mpn,
    Quantity : req.body.quantity,
    Image : req.body.image,
    Category : req.body.category
  }, (err) => {
    if (err) {
      console.log(err);
    } 
  })
  res.redirect('/view');
})

app.get('/orders', (req, res) => {
  res.render('orders.ejs');
})

//Connects to MongoDB using Mongoose 
//Doesn't connect to server port unless connection is established
dbConnect();
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen((process.env.PORT || PORT), function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
  }); 
});
