/*
Напиши JavaScript програма која ја пресметува платата на работник.

Правила:

Работникот има работено 45 часа

Цена по час е 10 €

Нормални часови се 40

Секој час над 40 се плаќа 1.5× повеќе

Прикажи ја вкупната плата

👉 Користи if / else за да провериш дали има прекувремени часови.

*/

// Код од барање

/*
const workedHours = 45;
const hourlyRate = 10;
const normalHours = 40;
const overtimeHours = workedHours - normalHours;
const overtimeMultiplier = 1.5;
let totalSalary;

if (workedHours > normalHours) {
    totalSalary = (normalHours * hourlyRate) + (overtimeHours * hourlyRate * overtimeMultiplier);
} else {
    totalSalary = workedHours * hourlyRate;
}

alert("Вкупната плата на работникот е: " + totalSalary + " €"); 
*/

const workedHours = parseInt(prompt("Внесете го бројот на изработени часови:"));
const hourlyRate = 10;
const normalHours = 40;
const overtimeHours = workedHours - normalHours;
const overtimeMultiplier = 1.5;
let totalSalary;
if (workedHours > normalHours) {
  totalSalary =
    normalHours * hourlyRate + overtimeHours * hourlyRate * overtimeMultiplier;
} else {
  totalSalary = workedHours * hourlyRate;
}
alert(`Вкупната плата на работникот е: ${totalSalary} €`);