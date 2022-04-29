const express = require('express');
const router = express.Router();
const itemModel = require('../model/Inventory');
const { ensureAuthenticated } = require('../config/auth');
const customerModel = require('../model/Customer');

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

router.get('/corder/new', (req, res) => {
    res.render('new_customer_order.ejs');
})

router.post('/newCustomer', (req, res) => {
    const newCustomer = new customerModel({
        name : req.body.name, 
        date : req.body.date, 
        contactInfo : req.body.contactInfo,
        address : req.body.address,
        transactionType: req.body.transactionType,
        bannerIndex : req.body.bannerIndex,
        poNumber : req.body.poNumber,
        itemsOrdered : req.body.itemsOrdered,
        applecare : req.body.applecare,
        registerTransaction : req.body.registerTransaction,
        estimatedDelivery : req.body.estimatedDelivery,
        additionalNotes : req.body.additionalNotes
      })
      newCustomer.save((err) => {
        if (err) {
          console.log(err);
        }
      })
    res.redirect('/orders');
})

module.exports = router;