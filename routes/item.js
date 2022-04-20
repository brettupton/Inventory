const express = require('express');
const router = express.Router();
const itemModel = require('../model/Inventory');
const { ensureAuthenticated } = require('../config/auth');

router.get('/view', (req, res) => {
    itemModel.find((err, data) => {
      if (!err) {
          itemModel.findOne({UPC : req.query.item}, async (err, itemResult) => {
            var next = await itemModel.findOne().gt('Name', itemResult.Name).sort({ Name: 1});
              var result = {
                  dataArray : data,
                  item : itemResult,
                  nextUPC : next.UPC
              };
            res.render('item.ejs', result);
        })
      } else {
        console.log('Error: ' + err);
      }
    }).sort({ Name : 1});
  })

  module.exports = router;