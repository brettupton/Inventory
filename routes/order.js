const express = require('express');
const router = express.Router();
const itemModel = require('../model/Inventory');
const { ensureAuthenticated } = require('../config/auth');

// INDEX
router.get('/', (req, res) => {
  itemModel.find((err, data) => {
    if (!err) {
      res.render('order.ejs', { dataArray : data });
    } else {
      console.log('Error: ' + err);
    }
  });
})

// VIEW LOW STOCK
router.get('/stock/low', (req, res) => {
    itemModel.find({ Quantity: { $lte: 5 }}, (err, data) => {
        if (!err) {
            res.render('low_stock.ejs', { dataArray : data});
        } else {
            res.flash('search_error', 'There are no items that are low on stock');
            res.redirect('/');
        }
    }).sort({ Category: 1});
})

module.exports = router;