/*
Напиши JavaScript програма која ја пресметува финалната цена на онлајн нарачка.

Податоци:
Цена на еден производ: 35 €

Количина: 4 производи

Данок: 18%

Достава:

Ако сумата е под 100 € → достава 10 €

Ако е 100 € или повеќе → достава бесплатна

Попуст:

Ако купувачот е член, добива 10% попуст

Ако не е член, нема попуст

Барања:
Пресметај вкупна цена без данок

Примени попуст (ако има)

Пресметај данок

Одреди цена за достава

Прикажи ја финалната сума

*/

const taxRate = 0.18;
const productPrice = parseFloat(prompt("Внесете ја цената на еден производ:"));
const quantity = parseInt(prompt("Внесете ја количината на производи:"));
const isMember = prompt("Дали сте член? (Внесете 'да' или 'не')");
const totalPriceWithoutTax = productPrice * quantity;
if (isNaN(productPrice) || isNaN(quantity) || (isMember.toLowerCase() !== 'да' && isMember.toLowerCase() !== 'не')) {
    alert("Внесовте невалидни податоци. Ве молиме обидете се повторно.");
} else {
    let discount = 0;
    if (isMember.toLowerCase() === 'да') {
        discount = totalPriceWithoutTax * 0.1;
    }
    const totalPriceWithDiscount = totalPriceWithoutTax - discount;
    const tax = totalPriceWithDiscount * taxRate;
    const shippingCost = totalPriceWithDiscount >= 100 ? 0 : 10;
    const finalPrice = totalPriceWithDiscount + tax + shippingCost;
    alert("Финалната цена на нарачката е: " + finalPrice.toFixed(2) + " €");
}   
