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
router.get('/sort', ensureAuthenticated, (req, res) => {
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
    res.redirect('/view/inventory');
  }
})

// DELETE
router.get('/delete/:id', ensureAuthenticated, (req, res) => {
  itemModel.findOneAndDelete({UPC : req.params.id}, (err) => {
    if (err) {
      console.log(err);
    }
  })
  res.redirect('/view/inventory');
})

// ADD
router.post('/add', ensureAuthenticated, (req, res) => {
  itemModel.findOne({UPC : req.body.upc})
    .then(item => {
      if (item) {
        res.render('error.ejs', { itemName : item.Name });
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

module.exports = router;