addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    createTable();
  }
});

addEventListener("keydown", function (event) {
  if (event.key === "Delete") {
    clearAll();
  }
});

const error = document.getElementById("error");
error.style.color = "red";

function createTable() {
  const rows = document.getElementById("rows").value;
  const columns = document.getElementById("columns").value;
  const container = document.getElementById("tableContainer");

  error.textContent = "";
  container.innerHTML = "";

  if (rows === "" || columns === "") {
    error.textContent = "Please enter both rows and columns";
    return;
  }

  if (rows <= 0 || columns <= 0) {
    error.textContent = "Value cannot be less than 1";
    return;
  }

  const table = document.createElement("table");

  for (let i = 1; i <= rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 1; j <= columns; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;

      td.addEventListener("click", function () {
        td.classList.toggle("locked");
      });

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  const text = document.createElement("h2");
  text.textContent = "Click on the table to reveal it's content.";

  container.appendChild(text);
  container.appendChild(table);
}

function clearAll() {
  document.getElementById("tableContainer").innerHTML = "";
  document.getElementById("rows").value = "";
  document.getElementById("columns").value = "";
  document.getElementById("error").textContent = "";
}
