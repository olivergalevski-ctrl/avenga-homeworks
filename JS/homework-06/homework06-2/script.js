const numbers = [];

const input = document.getElementById("numberInput");
const error = document.getElementById("error");
error.style.color = "red";
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addNumber();
  }
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Delete") {
    clearAll();
  }
});

function addNumber() {
  const value = input.value.trim();
  error.textContent = "";

  if (value === "" || isNaN(value)) {
    error.textContent = "Please enter a valid number";
    input.value = "";
    return;
  }

  numbers.push(Number(value));
  input.value = "";
  updateUI();
}

function clearAll() {
  numbers.length = 0;
  document.getElementById("numberList").innerHTML = "";
  document.getElementById("sum").textContent = "";
  document.getElementById("equation").textContent = "";
  document.getElementById("numberInput").value = "";
  error.textContent = "";
}

function updateUI() {
  const list = document.getElementById("numberList");
  const sumParagraph = document.getElementById("sum");
  const equationParagraph = document.getElementById("equation");

  list.innerHTML = "";
  let sum = 0;

  numbers.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
    sum += num;
  });

  sumParagraph.textContent = "Sum: " + sum;
  equationParagraph.textContent = numbers.join(" + ") + " = " + sum;
}
