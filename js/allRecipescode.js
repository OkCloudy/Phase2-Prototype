document.addEventListener("DOMContentLoaded", function () {
  console.log("ALL RECIPES");
  // Retrieving recipes from sessionStorage
  let recipes = JSON.parse(sessionStorage.getItem("recipes")) || [];

  // Selecting element where we will display recipes
  let recipesContainer = document.getElementById("recipes-container");

  // Loop through all recipes and generate HTML for each one
  recipes.forEach(function (recipe) {
    // Create container for each recipe
    let recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");

    // Add the recipe name
    let nameElement = document.createElement("h3");
    nameElement.textContent = recipe.name;
    recipeElement.appendChild(nameElement);

    // Add the preparation time
    let prepTimeElement = document.createElement("p");
    prepTimeElement.textContent = "Prep Time: " + recipe.prepTime + " mins";
    recipeElement.appendChild(prepTimeElement);

    // Add the cooking time
    let cookTimeElement = document.createElement("p");
    cookTimeElement.textContent = "Cook Time: " + recipe.cookTime + " mins";
    recipeElement.appendChild(cookTimeElement);

    // Add the ingredients list
    let ingredientTitle = document.createElement("h5");
    ingredientTitle.textContent = "Ingredients:";
    recipeElement.appendChild(ingredientTitle);
    let ingredientsElement = document.createElement("ul");
    recipe.ingredients.forEach(function (ingredient) {
      let li = document.createElement("li");
      li.textContent = ingredient.trim(); // Trim any extra whitespace
      ingredientsElement.appendChild(li);
    });
    recipeElement.appendChild(ingredientsElement);

    // Create a button for deleting the recipe
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-recipe");
    deleteButton.onclick = function () {
      // Placeholder for delete functionality
      console.log("Delete recipe at index", index);
    };
    recipeElement.appendChild(deleteButton);

    // Create a button for favoriting the recipe
    let favoriteButton = document.createElement("button");
    favoriteButton.textContent = "Favorite";
    favoriteButton.classList.add("favorite-recipe");
    favoriteButton.onclick = function () {
      // Placeholder for favorite functionality
      console.log("Favorite recipe at index", index);
    };
    recipeElement.appendChild(favoriteButton);

    // Create a button for editing the recipe
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-recipe");
    editButton.onclick = function () {
      // Placeholder for edit functionality
      console.log("Edit recipe at index", index);
      window.location.href = "editRecipe.html"; // Redirect to edit recipe page (you'll need to implement this)
    };
    recipeElement.appendChild(editButton);

    // Make the entire recipe container clickable
    recipeElement.classList.add("clickable");
    recipeElement.onclick = function () {
      // Navigate to a different page to view the recipe details
      // Prevent navigation if one of the buttons was clicked
      if (
        event.target === deleteButton ||
        event.target === favoriteButton ||
        event.target === editButton
      ) {
        event.stopPropagation(); // Prevent the click from triggering on the container
      } else {
        console.log("Go to recipe detail page for recipe at index", index);
        window.location.href = "recipeDetail.html"; // Redirect to recipe detail page (you'll need to implement this)
      }
    };

    // Add the complete recipe element to the container
    recipesContainer.appendChild(recipeElement);

    // Add the complete recipe element to the container
    recipesContainer.appendChild(recipeElement);
  });

  // Check if there are no recipes
  if (recipes.length === 0) {
    //recipesContainer.innerHTML = '<p>No recipes to display.</p>';
  }
});
