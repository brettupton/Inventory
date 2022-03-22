import inventoryObjectContainer from "./JS/inventory.js";

const appleID = 2970325;
const createButton = document.getElementById('create');
const viewButton = document.getElementById('view');
const addQuantityButton = document.getElementById('addQuantity');
const updateArrayButton = document.getElementById('updateArray');
let fullInventory = inventoryObjectContainer;

if (createButton && viewButton) {
    createButton.addEventListener('click', () => {window.location.href="create.html";});
    viewButton.addEventListener('click', () => {window.location.href="view.html";});
}
if (window.location.pathname === "/view.html") {
    addQuantityButton.addEventListener('click', addToItem);
    showArrayNames(fullInventory);
    updateArrayButton.addEventListener('click', (fullInventory) => showArrayNames);
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

// Create HTML table elements for each item in the inventory object
function showArrayNames(obj) {
    let counter = 0;
    let tableBody = document.getElementById('tableBody');
    let tableRow = document.getElementsByClassName("tr");
    console.log(tableRow.className);
    let tableData = document.getElementsByClassName("td");
    tableBody.removeChild(tableRow);
    tableBody.removeChild(tableData);
    for (let item in obj) {
        counter++;
        let addRow = document.createElement("tr");
        tableBody.appendChild(addRow);
        let addNum = document.createElement("td");
        addNum.id = 'itemNum';
        let addName = document.createElement("td");
        addName.id = 'itemName';
        let addPartNumber = document.createElement("td");
        addPartNumber.id = 'partNumber';
        let addQuantity = document.createElement("td");
        addQuantity.id = `addQuantity${counter}`;
        addRow.appendChild(addNum);
        addRow.appendChild(addName);
        addRow.appendChild(addPartNumber);
        addRow.appendChild(addQuantity);
        addNum.innerHTML = counter;
        addName.innerHTML = obj[item].itemName;
        addPartNumber.innerHTML = obj[item].partNumber;
        addQuantity.innerHTML = obj[item].quantity;
    }
}

function addToItem() {
    const newQuantity = document.getElementById('newQuantity');
    const inventoryNum = document.getElementById('itemNum');
    fullInventory[inventoryNum.value].quantity = newQuantity.value;
}

function updateArray() {
    for (let i = 1; i < Object.keys(fullInventory).length; i++) {
        let quantityElement = document.getElementById(`addQuantity${i}`);
        //quantityElement.innerHTML = fullInventory[i].quantity;
    }
    console.log(`addQuantity${4}`);
}
