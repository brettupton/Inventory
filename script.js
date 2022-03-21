import {inventory, MPN} from "./JS/inventory.js";

const appleID = 2970325;
const createButton = document.getElementById('create');
const viewButton = document.getElementById('view');
const listButton = document.getElementById('showList');
const objArray = [];

if (createButton && viewButton) {
    createButton.addEventListener('click', () => {window.location.href="create.html";});
    viewButton.addEventListener('click', () => {window.location.href="view.html";});
}
if (listButton) {
    listButton.addEventListener('click', () => showArrayNames(inventory));
}

// Create the class that will hold the information for the items in inventory
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

// Create an object that holds the new inventory array and the date created
function inventoryObj(theArray, theDate) {
    this.invArray = theArray,
    this.dateTime = theDate
}

// Create a new blank inventory and store it in the inventory object
// Stores the new inventory object into an array
function createEmptyInventory() {
    let newArray = [];
    for (let i = 0; i < inventory.length; i++) {
        let newItem = new inventoryItem(inventory[i]);
        newItem.MPN = MPN[i];
        newArray.push(newItem);
    }
    console.log('inventory created');
    let invobj = new inventoryObj(newArray, new Date().toString());
    objArray.push(invobj);
    return objArray[0];
}

// Create HTML list elements for each item name in the inventory array
function showArrayNames(arr) {
    for (let item of arr) {
        let addTo = document.createElement("li");
        let ulList = document.getElementById('viewList');
        addTo.className = 'list-group-item';
        ulList.appendChild(addTo);
        addTo.innerHTML = item;
    }
}

export {inventoryItem, createEmptyInventory};