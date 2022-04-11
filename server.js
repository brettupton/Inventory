const express = require('express');
const app = express();
const passport = require('passport')
require('dotenv').config();
require('./config/passport')(passport);
const PORT = 3000;
const ejs = require('ejs');
const flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect.js');


//Rendering Engine
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Flash messages
app.use(function(req, res, next){
  res.locals.add_success = req.flash('add_success');
  res.locals.error = req.flash('error');
  res.locals.search_error = req.flash('search_error');
  res.locals.add_error = req.flash('add_error');
  next();
});

// Router
app.use('/', (require('./routes/index')));
app.use('/view', (require('./routes/view')));
app.use('/users', require('./routes/users'));


app.get('/orders', (req, res) => {
  res.send('I\'m working on it >:(');
})


//Database connection and server listen
dbConnect();
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen((process.env.PORT || PORT), function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
  }); 
});
