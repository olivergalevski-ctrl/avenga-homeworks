import { getData } from "./api.js";

async function handleData() {

    const data = await getData();
    console.log(data);
    
const allDesserts = data.recipes.filter(recipe => {
  const hasDessertTag = recipe.tags.some(tag => tag.toLowerCase() === "dessert");
  const hasDessertMeal = recipe.mealType.some(type => type.toLowerCase() === "dessert");
  return hasDessertTag || hasDessertMeal;
});

console.log(allDesserts); 

const recipesWithMoreThan30Reviews = data.recipes
.filter(recipe => recipe.reviewCount > 30);
console.log(recipesWithMoreThan30Reviews);

const CinnamonRecipes = data.recipes.filter(recipe => {
  return recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes("cinnamon"));
});

console.log(CinnamonRecipes);   


const LunchAndDinnerRecipes = data.recipes.filter(recipe => {
  const hasLunchMeal = recipe.mealType.some(type => type.toLowerCase() === "lunch");
  const hasDinnerMeal = recipe.mealType.some(type => type.toLowerCase() === "dinner");
  return hasLunchMeal && hasDinnerMeal;
});

console.log(LunchAndDinnerRecipes); 

const ingredientsNeededForMangoSalsaChicken = data.recipes
.find(recipe => recipe.name === "Mango Salsa Chicken").ingredients;
console.log(ingredientsNeededForMangoSalsaChicken);

const calculateAvgNumOfCaloriesOfAllAmericanRecipes = data.recipes.reduce(
    (acc, recipe) => {
        if (recipe.cuisine.toLowerCase() === "american") {
            acc.totalCalories += recipe.caloriesPerServing;
            acc.count++;
        }
        return acc;
    },
    { totalCalories: 0, count: 0 }  
);

const avgNumOfCaloriesOfAllAmericanRecipes = calculateAvgNumOfCaloriesOfAllAmericanRecipes.count === 0 
? 0 : calculateAvgNumOfCaloriesOfAllAmericanRecipes.totalCalories / calculateAvgNumOfCaloriesOfAllAmericanRecipes.count;
console.log(avgNumOfCaloriesOfAllAmericanRecipes);

const calculateAvgCookingTimeOfAllRecipesWithPasta = data.recipes.reduce(
    (acc, recipe) => {
        if (recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes("pasta"))) {

            acc.totalCookingTime += recipe.cookTimeMinutes;
            acc.count++;
        }
        return acc;
    },
    { totalCookingTime: 0, count: 0 }
);

const avgCookingTimeOfAllRecipesWithPasta = calculateAvgCookingTimeOfAllRecipesWithPasta.count === 0 
? 0 : calculateAvgCookingTimeOfAllRecipesWithPasta.totalCookingTime / calculateAvgCookingTimeOfAllRecipesWithPasta.count;
console.log(avgCookingTimeOfAllRecipesWithPasta);   

const recipeWithTheLowestNumOfReviews = data.recipes.reduce((lowest, recipe) => {
  return recipe.reviewCount < lowest.reviewCount ? recipe : lowest;
}, data.recipes[0]);

console.log(recipeWithTheLowestNumOfReviews);

}

handleData();