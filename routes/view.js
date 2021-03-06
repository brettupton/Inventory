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
router.get('/inventory/sort', ensureAuthenticated, (req, res) => {
  switch (Object.keys(req.query)[0]) {
    case 'category': 
      itemModel.find({ Category : req.query.category }, (err, data) => {
        res.render('view.ejs', { dataArray : data });
      });
      break;
    case 'quantity': 
      if (req.query.quantity === 'descending') {
        itemModel.find((err, data) => {
          if (!err) {
            res.render('view.ejs', { dataArray : data })
          }
        })
        .sort({ Quantity : -1});
        } else if (req.query.quantity === 'ascending') {
          itemModel.find((err, data) => {
            if (!err) {
              res.render('view.ejs', { dataArray : data })
            }
          })
          .sort({ Quantity : 1});
        } else {
          res.redirect('/view/inventory');
        }
    break;
  }
})

// DELETE
router.get('/delete/:id', ensureAuthenticated, (req, res) => {
  itemModel.findOneAndDelete({UPC : req.params.id}, (err, item) => {
    if (!err) {
      req.flash('success', `${item.Name} has been deleted`);
      res.redirect('/view/inventory');
    };
  })
})

// ADD
router.post('/add', ensureAuthenticated, (req, res) => {
  itemModel.findOne({UPC : req.body.upc})
    .then(item => {
      if (item) {
        req.flash('info', `${item.Name} already has that UPC`);
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
        req.flash('success', `${newItem.Name} has been added`);
        res.redirect('/view/inventory');
      }
    })
})

// UPDATE
router.post('/update/:id', ensureAuthenticated, (req, res) => {
  itemModel.findOneAndUpdate({ UPC : req.params.id }, {
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
router.get('/inventory/search', ensureAuthenticated, (req, res) => {
  itemModel.find({ Name: {
     "$regex" : req.query.search,
     "$options" : "i"
  }}, (err, found) => {
    if (found.length > 0) {
      res.render('view.ejs', { dataArray : found });
    } else if (found.length <= 0) {
      var itemArray = [];
      itemModel.findOne({UPC : req.query.search}, async (err, searchResult) => {
        if (!searchResult) {
            itemModel.findOne({MPN : req.query.search}, async (err, searchResult) => {
              if (!searchResult) {
                req.flash('error', 'No matches found');
                res.redirect('/view/inventory');
              } else {
                itemArray.push(searchResult);
                res.render('view.ejs', { dataArray : itemArray });
              }
              if (err) {
                    res.redirect('/view/inventory');
              }
            })
        } else {
            itemArray.push(searchResult);
            res.render('view.ejs', { dataArray : itemArray });
        }
      })
    }
  })
})

module.exports = router;