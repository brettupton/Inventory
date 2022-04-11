const express = require('express');
const router = express.Router();
const itemModel = require('../model/Inventory');
const { ensureAuthenticated } = require('../config/auth');

// INITIAL DATABASE LOAD
router.get('/inventory', ensureAuthenticated, (req, res) => {
  itemModel.find((err, data) => {
    if (!err) {
      res.render('view.ejs', { dataArray : data });
    } else {
      console.log('Error: ' + err);
    }
  });
})

// SORT
router.get('/inventory/sort/:id', ensureAuthenticated, (req, res) => {
  switch (req.params.id) {
    case 'quantity': 
      itemModel.find((err, data) => {
        if (!err) {
          res.render('view.ejs', { dataArray : data })
        }
      })
      .sort({ Quantity : -1});
      break;
    case 'category': 
      itemModel.find((err, data) => {
        if (!err) {
          res.render('view.ejs', { dataArray : data })
        }
      })
      .sort({ Category : -1});
      break;
  }
})

// DELETE
router.get('/delete/:id', ensureAuthenticated, (req, res) => {
  itemModel.findOneAndDelete({UPC : req.params.id}, (err, item) => {
    if (item) {
      req.flash('delete', `${item.Name} has been deleted`);
      res.redirect('/view/inventory');
    };
  })
  res.redirect('/view/inventory');
})

// ADD
router.post('/add', ensureAuthenticated, (req, res) => {
  itemModel.findOne({UPC : req.body.upc})
    .then(item => {
      if (item) {
        req.flash('add_error', `${item.Name} already has that UPC`);
        res.redirect('/view/inventory');
      } else {
        const newItem = new itemModel({
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
        req.flash('add_success', `${newItem.Name} has been added`);
        res.redirect('/view/inventory');
      }
    })
})

// UPDATE
router.post('/update/:id', ensureAuthenticated, (req, res) => {
  itemModel.findOneAndUpdate({UPC : req.params.id}, {
    Name : req.body.name,
    UPC : req.body.upc,
    MPN : req.body.mpn,
    Quantity : req.body.quantity,
    Category : req.body.category
  }, (err) => {
    if (err) {
      console.log(err);
    } 
  })
  res.redirect('/view/inventory');
})

// SEARCH
router.get('/search', ensureAuthenticated, (req, res) => {
  itemModel.find({ Name: {
     "$regex" : req.query.search,
     "$options" : "i"
  }}, (err, found) => {
    if (found.length > 0) {
      res.render('view.ejs', {dataArray : found});
    } else if (found.length <= 0) {
      req.flash('search_error', 'No matches found');
      res.redirect('/view/inventory');
    }
  })
})

module.exports = router;