
// Po instrukcii na domashnata
/*

let phonePrice = 119.95;
let taxRate = 0.05;
let taxAmount = phonePrice * taxRate;
let totalPrice = phonePrice + taxAmount;
let pricePhones30= totalPrice * 30;

console.log("The total price for 30 phones including tax is: $" + pricePhones30.toFixed(2));

*/


// Nov kod so prompt i broj na telefoni po zhelba
/*
let phoneNum=parseInt(prompt("Enter number of phones to buy:"));
let phonePrice = 119.95;
let taxRate = 0.05;
let taxAmount = phonePrice * taxRate;
let totalPrice = phonePrice + taxAmount;
let pricePhones= totalPrice * phoneNum;

alert("The total price for " + phoneNum + " phones including tax is: $" + pricePhones.toFixed(2));

*/

// Kod so funkcija

function calculateTotalPrice(phoneNum) {
    let phonePrice = 119.95;
    let taxRate = 0.05;
    let taxAmount = phonePrice * taxRate;
    let totalPrice = phonePrice + taxAmount;
    let pricePhones= totalPrice * phoneNum;
    return pricePhones.toFixed(2);
}   
let phoneNum=parseInt(prompt("Enter number of phones to buy:"));
let totalCost = calculateTotalPrice(phoneNum);
alert("The total price for " + phoneNum + " phones including tax is: $" + totalCost);
