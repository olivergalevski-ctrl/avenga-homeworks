/*Напиши JavaScript програма која ја пресметува финалната цена на производ.

Правила:

Основна цена на производот е 120 €

Ако корисникот е VIP, добива 20% попуст

Ако корисникот не е VIP, нема попуст

Прикажи ја финалната цена

Пример логика:

VIP → 120 € − 20%

Not VIP → 120 €

Користи if / else за да провериш дали корисникот е VIP.
*/

// По барање на задачата, еве го решението:
/*
const basePrice = 120;
const isVIP = true;
const discountRate = 0.20;
const finalPrice= isVIP ? basePrice - (basePrice * discountRate) : basePrice;
alert("Финалната цена на производот е: " + finalPrice + " €");

*/
// Решение со промпт.

const basePrice = 120;
const discountRate = 0.2;
let isVIP;
let finalPrice;

isVIP = prompt("Дали сте VIP корисник? true/false");

if (isVIP === "true") {
  finalPrice = basePrice - basePrice * discountRate;
  alert("Финалната цена на производот е: " + finalPrice + " €");
} else if (isVIP === "false") {
  finalPrice = basePrice;
  alert("Финалната цена на производот е: " + finalPrice + " €");
} else {
  alert(
    "Внесовте невалидна вредност. Ве молиме внесете true за VIP или false за обичен корисник."
  );
}
