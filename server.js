const express = require('express');
const app = express();
const passport = require('passport')
require('dotenv').config();
require('./config/passport')(passport);
const PORT = 3000;
const ejs = require('ejs');
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


// Router
app.use('/', (require('./routes/index')));
app.use('/view', (require('./routes/view')));
app.use('/users', require('./routes/users'));


app.get('/orders', (req, res) => {
  res.send('Coming Soon');
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
