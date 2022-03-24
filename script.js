import inventoryObjectContainer from "./JS/inventory.js";

const appleID = 2970325;
const fullInventory = inventoryObjectContainer;
const createButton = document.getElementById('create');
const viewButton = document.getElementById('view');
const addQuantityButton = document.getElementById('addQuantity');
const updateArrayButton = document.getElementById('updateArray');
const deleteButton = document.getElementById('deleteArray');

if (createButton && viewButton) {
    createButton.addEventListener('click', () => {window.location.href="create.html";});
    viewButton.addEventListener('click', () => {window.location.href="view.html";});
}
if (window.location.pathname === "/view.html") {
    addQuantityButton.addEventListener('click', addToItem);
    showArrayNames(fullInventory);
    updateArrayButton.addEventListener('click', function() {
        updateArray(fullInventory);
    });
}

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
function showArrayNames(arr) {
    let itemNumber = 0;
    const tableBody = document.getElementById('tableBody');
    for (let item of arr) {
        itemNumber++;
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + itemNumber + '</td>' +
        '<td>' + item.itemName + '</td>' +
        '<td>' + item.partNumber + '</td>' +
        '<td>' + item.quantity + '</td>';
        tableBody.appendChild(tr);
    }
}

function addToItem() {
    const newQuantity = document.getElementById('newQuantity');
    const inventoryNum = document.getElementById('itemNum');
    if (inventoryNum.value >= 1 && inventoryNum.value <= fullInventory.length) {
        if (newQuantity.value < 200) {
            fullInventory[(inventoryNum.value)-1].quantity = parseInt(newQuantity.value);
        } else {
            alert('That number is too large. I only accept values less than 200.');
        }
    } else {
        alert('That inventory number is outside my range.');
    }
}

function updateArray(arr) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    showArrayNames(arr);
}
