import {inventory, MPN} from "./JS/inventory.js";

const appleID = 2970325;
const inventoryArray = [];
const createButton = document.getElementById('create').addEventListener('click', () => {console.log('create')});
const editButton = document.getElementById('edit').addEventListener('click', () => {console.log('edit')});


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

function createEmptyInventory() {
    for (let i = 0; i < inventory.length; i++) {
        let newItem = new inventoryItem(inventory[i]);
        newItem.MPN = MPN[i];
        inventoryArray.push(newItem);
    }
    console.log('New inventory added');
}

function showArrayNames(array) {
    for (const item of array) {
        return item.name;
    }
}
