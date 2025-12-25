function isValidDate(day, month) {
  if (month < 1 || month > 12) {
    return "Невалиден датум";
  }
  if (day < 1) {
    return "Невалиден датум";
  }
  if (month === 2 && day > 28) {
    return "Невалиден датум";
  } else if (
    (month === 4 || month === 6 || month === 9 || month === 11) &&
    day > 30
  ) {
    return "Невалиден датум";
  } else if (
    (month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12) &&
    day > 31
  ) {
    return "Невалиден датум";
  }
  return "Валиден датум";
}

function checkValidDate() {
const day = parseInt(prompt("Внесете ден (број):"));
if (isNaN(day)) {
  alert("Внесовте невалиден ден.");
  return;
}
const month = parseInt(prompt("Внесете месец (број 1–12):")); 
if (isNaN(month)) {
  alert("Внесовте невалиден месец.");
  return;
}

const result = isValidDate(day, month);
alert(`Ден: ${day}\nМесец: ${month}\n→ ${result}`);
}

checkValidDate();