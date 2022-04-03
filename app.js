var express = require('express');
var app = express();
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

app.get('/view.html', (req, res) => {
  itemModel.find((err, data) => {
    if (!err) {
      res.render('view.ejs', { dataArray : data });
    } else {
      console.log('Error: ' + err);
    }
  });
})

app.post('/add', (req, res) => {
  var newItem = new itemModel({
    Name : req.body.name, 
    UPC : req.body.upc, 
    MPN : req.body.mpn,
    Quantity : req.body.quantity
  })
  newItem.save((err) => {
    if (err) {
      console.log(err);
    }
  })
  res.redirect('/view.html');
})

//Connects to MongoDB using Mongoose 
//Doesn't connect to server port unless connection is established
dbConnect();
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
  }); 
});
