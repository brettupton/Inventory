var mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect.js');
const itemModel = require('./model/Inventory.js');
let databaseArray = [];

dbConnect();

itemModel.find((err, data) => {
    if (data) {
      for (let item in data) {
          databaseArray.push(item);
      }
    } else {
        console.log('Failed: ' + err);
    }
});
showArrayNames(databaseArray);

// Create HTML table elements for each item in the inventory array
function showArrayNames(arr) {
    let itemNumber = 0;
    const tableBody = document.getElementById('tableBody');
    for (let item of arr) {
        itemNumber++;
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + itemNumber + '</td>' +
        '<td>' + item.Name + '</td>' +
        '<td>' + item.MPN + '</td>' +
        '<td>' + item.UPC + '</td>' +
        '<td>' + item.Quantity + '</td>';
        tableBody.appendChild(tr);
    }
}

// Get input from user and set new quantity on chosen item ID
function addToItem() {
    const newQuantity = document.getElementById('newQuantity');
    const inventoryNum = document.getElementById('itemNum');
    if (inventoryNum.value >= 1 && inventoryNum.value <= dataArray.inventory.length) {
        if (newQuantity.value < 200) {
            dataArray.inventory[(inventoryNum.value)-1].Quantity = parseInt(newQuantity.value);
        } else {
            alert('That number is too large. I only accept values less than 200.');
        }
    } else {
        alert('That inventory number is outside my range.');
    }
}

// Deletes current HTML content from table and calls the showArrayNames function
function updateArray(arr) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    showArrayNames(arr);
}