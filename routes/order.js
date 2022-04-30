const express = require('express');
const router = express.Router();
const itemModel = require('../model/Inventory');
const { ensureAuthenticated } = require('../config/auth');
const customerModel = require('../model/Customer');

// INDEX
router.get('/', ensureAuthenticated, (req, res) => {
  res.render('order.ejs');
})

// VIEW LOW STOCK
router.get('/stock/low', (req, res) => {
    itemModel.find({ Quantity: { $lte: 5 }}, (err, data) => {
        if (!err) {
            res.render('low_stock.ejs', { dataArray : data});
        } else {
            res.flash('error', 'There are no items that are low on stock');
            res.redirect('/');
        }
    }).sort({ Category: 1});
})

// NEW CUSTOMER ORDER FORM
router.get('/corder/new', ensureAuthenticated, (req, res) => {
    res.render('new_customer_order.ejs');
})

// ADD NEW CUSTOMER
router.post('/newCustomer', ensureAuthenticated, (req, res) => {
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
        if (!err) {
          req.flash('success', 'Customer added');
          res.redirect('/orders');
        }
      })
})

// VIEW CUSTOMER ORDERS
router.get('/corder', (req, res) => {
  customerModel.find((err, data) => {
    if (!err) {
      res.render('view_customer.ejs', {customersArray : data});
    }
  })
})

module.exports = router;