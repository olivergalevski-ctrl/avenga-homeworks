const error = document.getElementById("error");
error.style.color = "red";

function createIngredientInputs() {
  const count = document.getElementById("ingredientCount").value;
  const container = document.getElementById("ingredientInputs");
  const recipeName = document.getElementById("recipeName").value;

  error.textContent = "";
  container.innerHTML = "";

  if (recipeName === "") {
    error.textContent = "Please enter recipe name";
    return;
  }

  if (count === "") {
    error.textContent = "Please add number of ingredients";
    return;
  }

  if (count <= 0) {
    error.textContent = "Please add number greater than 0";
    return;
  }

  document.getElementById("ingredientsSection").classList.remove("hidden");

  for (let i = 1; i <= count; i++) {
    const row = document.createElement("div");
    row.className = "ingredientRow";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = `Ingredient ${i}`;
    nameInput.className = "ingredient";

    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.placeholder = "Amount";
    amountInput.className = "amount";
    amountInput.min = "1";

    const unitSelect = document.createElement("select");
    unitSelect.className = "unit";

    const grams = document.createElement("option");
    grams.value = "grams";
    grams.textContent = "g";

    const ml = document.createElement("option");
    ml.value = "mililiters";
    ml.textContent = "ml";

    unitSelect.appendChild(grams);
    unitSelect.appendChild(ml);

    row.appendChild(nameInput);
    row.appendChild(amountInput);
    row.appendChild(unitSelect);

    container.appendChild(row);
  }
}

function createRecipe() {
  const ingredientRows = document.querySelectorAll(".ingredientRow");
  const result = document.getElementById("recipeResult");
  const recipeName = document.getElementById("recipeName").value;
  const ingredientInputs = document.getElementById("ingredientInputs").value;

  error.textContent = "";
  result.innerHTML = "";

  if (recipeName === "") {
    error.textContent = "Please enter recipe name";
    return;
  }

  if (ingredientRows.length === 0) {
    error.textContent = "Please enter ingredients";
    return;
  }

  if (ingredientInputs === "") {
    error.textContent = "Please add ingredients";
    return;
  }
  const heading = document.createElement("h2");
  heading.textContent = `Ingredients for "${recipeName}"`;
  result.appendChild(heading);

  const ul = document.createElement("ul");

  ingredientRows.forEach((row) => {
    const name = row.querySelector(".ingredient").value;
    const amount = row.querySelector(".amount").value;
    const unit = row.querySelector(".unit").value;

    if (name === "" || amount === "") {
      error.textContent = `Please fill all fields for ingredients`;
      ul.innerHTML = "";
      return;
    }

    if (amount <= 0) {
      error.textContent = `Please enter an amount greater than 0 for ${name}`;
      ul.innerHTML = "";
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} - ${amount} ${unit}`;
    ul.appendChild(li);
  });

  result.appendChild(ul);
}
