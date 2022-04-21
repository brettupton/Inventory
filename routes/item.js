const express = require('express');
const router = express.Router();
const itemModel = require('../model/Inventory');
const { ensureAuthenticated } = require('../config/auth');

// INDEX
router.get('/', (req, res) => {
    itemModel.find((err, data) => {
        if (!err) {
            res.render('item_index.ejs', {dataArray : data});
        } else {
            console.log('Error: ' + err);
        }
    }).sort({ Name: 1})
})

// DISPLAY WITH EITHER MPN OR UPC
router.get('/view', (req, res) => {
    itemModel.find((err, data) => {
        if (!err) {
            itemModel.findOne({UPC : req.query.item}, async (err, itemResult) => {
                if (!itemResult) {
                    itemModel.findOne({MPN : req.query.item}, async (err, itemResult) => {
                        if (err) {
                            res.redirect('/item');
                        }
                        var next = await itemModel.findOne().gt('Name', itemResult.Name).sort({ Name: 1});
                        var prev = await itemModel.findOne().lt('Name', itemResult.Name).sort({ Name: -1});
                        var result = {
                            dataArray : data,
                            item : itemResult,
                            nextUPC : next.UPC,
                            prevUPC : prev.UPC
                        };
                    res.render('item.ejs', result);
                    })
                } else {
                    var next = await itemModel.findOne().gt('Name', itemResult.Name).sort({ Name: 1});
                    var prev = await itemModel.findOne().lt('Name', itemResult.Name).sort({ Name: -1});
                        var result = {
                            dataArray : data,
                            item : itemResult,
                            nextUPC : next.UPC,
                            prevUPC : prev.UPC
                        };
                    res.render('item.ejs', result);
                }
            })
        } else {
            console.log('Error: ' + err);
        }
    }).sort({ Name : 1});
})

  module.exports = router;