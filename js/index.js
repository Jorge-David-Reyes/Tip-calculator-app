const boxButtons = document.querySelector('.boxButtons');
const bill = document.querySelector('#billInput');
const people = document.querySelector('#peopleInput');
const custom = document.querySelector('#customInput');

const tipAmount = document.querySelector('#tipAmount');
const totalAmount = document.querySelector('#totalAmount');

const reset = document.querySelector('#reset');

const elements = {
    boxButtons,
    bill,
    people,
    custom,
    tipAmount,
    totalAmount,
    reset
};


import { operator } from "./operator.js";

const { calculateTip, calculateTipCustom, removeRed, resetValues } = operator(elements);


function loadListener(){
    boxButtons.addEventListener('click', calculateTip);
    people.addEventListener('input', removeRed);
    custom.addEventListener('input', calculateTipCustom);
    bill.addEventListener('input', calculateTipCustom);
    reset.addEventListener('click', resetValues);
}

loadListener();