import {inventory, MPN} from "./JS/inventory.js";

const appleID = 2970325;
const createButton = document.getElementById('create');
const editButton = document.getElementById('edit');
const testButton = document.getElementById('test');
const testButton2 = document.getElementById('test-2');
const testDiv = document.getElementById('view-content');
const objArray = [];

if (createButton && editButton) {
    createButton.addEventListener('click', () => {window.location.href="create.html";});
    editButton.addEventListener('click', () => {window.location.href="edit.html";});
}

if (testButton && testButton2) {
    testButton.addEventListener('click', createEmptyInventory);
    testButton2.addEventListener('click', () => showArrayNames(createEmptyInventory()));
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

// creates HTML elements for each item name in the inventory array
function showArrayNames(arr) {
    for (let item of arr.invArray) {
        let addTo = document.createElement("p");
        addTo.className = 'names';
        addTo.innerHTML = item.name + ' | ' + item.MPN + ' | ' + item.IFQ;
        testDiv.appendChild(addTo);
    }
}

export {inventoryItem, createEmptyInventory};