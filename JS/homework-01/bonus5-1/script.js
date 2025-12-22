/*
Напиши JavaScript програма која ја пресметува нето платата на вработен.

Податоци:
Основна плата: 800 €

Работени денови: 22

Работникот отсуствувал 2 дена

Бонус:

Ако нема отсуства → 100 €

Ако има до 2 отсуства → 50 €

Повеќе од 2 → без бонус

Данок:

До 900 € → 10%

Над 900 € → 15%

Барања:
Пресметај колку денови се платени

Додади соодветен бонус

Пресметај данок според бруто износ

Прикажи нето плата

*/

// const baseSalary = 800;
// const totalWorkingDays = 22;
// const absentDays = 2;
// const dailyRate = baseSalary / totalWorkingDays;

// const paidDays = totalWorkingDays - absentDays;
// let bonus = 0;

// if (absentDays === 0) {
//     bonus = 100;
// } else if (absentDays <= 2) {
//     bonus = 50;
// }

// const grossSalary = dailyRate * paidDays + bonus;
// let tax = 0;

// if (grossSalary <= 900) {
//     tax = grossSalary * 0.1;
// } else {
//     tax = grossSalary * 0.15;
// }

// const netSalary = grossSalary - tax;
// console.log(`Neto plata: ${netSalary.toFixed(2)} €`);

const baseSalary = parseFloat(prompt("Enter base salary:"));
const totalWorkingDays = parseFloat(prompt("Enter total working days:"));
const absentDays = parseFloat(prompt("Enter absent days:"));
const dailyRate = baseSalary / totalWorkingDays;
const paidDays = totalWorkingDays - absentDays;
let bonus = 0;
if (absentDays === 0) {
  bonus = 100;
} else if (absentDays <= 2) {
  bonus = 50;
}
const grossSalary = dailyRate * paidDays + bonus;
let tax = 0;
if (grossSalary <= 900) {
  tax = grossSalary * 0.1;
} else {
  tax = grossSalary * 0.15;
}
const netSalary = grossSalary - tax;
console.log(`Neto plata: ${netSalary.toFixed(2)} €`);

// SO FUNKCIJA

// function calculateNetSalary(baseSalary, totalWorkingDays, absentDays) {
//   const dailyRate = baseSalary / totalWorkingDays;
//   const paidDays = totalWorkingDays - absentDays;
//   let bonus = 0;
//   if (absentDays === 0) {
//     bonus = 100;
//   } else if (absentDays <= 2) {
//     bonus = 50;
//   }
//   const grossSalary = dailyRate * paidDays + bonus;
//   let tax = 0;
//   if (grossSalary <= 900) {
//     tax = grossSalary * 0.1;
//   } else {
//     tax = grossSalary * 0.15;
//   }
//   const netSalary = grossSalary - tax;
//   return netSalary.toFixed(2);
// }

// const baseSalary = parseFloat(prompt("Enter base salary:"));
// const totalWorkingDays = parseFloat(prompt("Enter total working days:"));
// const absentDays = parseFloat(prompt("Enter absent days:"));

// const netSalary = calculateNetSalary(baseSalary, totalWorkingDays, absentDays);
// console.log(`Neto plata: ${netSalary} €`);
