function createIngredientInputs() {
  const count = document.getElementById("ingredientCount").value;
  const container = document.getElementById("ingredientInputs");

  container.innerHTML = "";
  document.getElementById("ingredientsSection").classList.remove("hidden");

  for (let i = 1; i <= count; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Ingredient ${i}`;
    input.className = "ingredient";
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }
}

function createRecipe() {
  const recipeName = document.getElementById("recipeName").value;
  const ingredients = document.querySelectorAll(".ingredient");
  const result = document.getElementById("recipeResult");

  result.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = `This is the list of ingredients for the recipe "${recipeName}"`;
  result.appendChild(heading);

  const ul = document.createElement("ul");

  ingredients.forEach((input) => {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
  });

  result.appendChild(ul);
}

// mnogu mi e basic, se zaigrav so prethodnata, kje gledam da ja sredam malce povekje pred chasot.
