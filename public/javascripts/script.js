const appleID = 2970325;
const dataArray = require('/javascripts/inventory.json');

var express = require('express');
var app = express();

app.use(express.json());


// Get data from json, assign the data to dataArray, and load the initial table
// fetch("inventory.json")
//   .then(response => response.json())
//   .then(json => {
//       dataArray = json;
//       showArrayNames(dataArray);
//   });


// Create the class that will hold the information for the report
class inventoryItem {
    constructor(name) {
        this.name = name;
        this.MPN = '';
        this.IFQ = 0;
        this.STSIndividual = 0;
        this.STSInstitution = 0;
        this.STRIndividual = 0;
        this.STRInstitution = 0;
        this.STPIndividual = 0;
        this.STPInstitution = 0;
    }
}

// Create HTML table elements for each item in the inventory array
function showArrayNames(obj) {
    let itemNumber = 0;
    const tableBody = document.getElementById('tableBody');
    for (let item of obj.inventory) {
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