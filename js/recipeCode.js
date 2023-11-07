let recipeArrary = [];

document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submission prevented.');
    // Create a new recipe object from the form inputs
    let newRecipe = {
      name: document.getElementById('recipeName').value,
      prepTime: parseInt(document.getElementById('prepTime').value, 10),
      cookTime: parseInt(document.getElementById('cookTime').value, 10),
      ingredients: document.getElementById('ingredients').value.split(',')
      // Add more fields as necessary
    };

    console.log('New recipe object:', newRecipe);
  
    // Retrieve the existing recipes from session storage
    let recipes = JSON.parse(sessionStorage.getItem('recipes')) || [];
  
    // Add the new recipe to the array
    recipes.push(newRecipe);
  
    // Save the updated recipes array back to session storage
    sessionStorage.setItem('recipes', JSON.stringify(recipes));
  
    console.log('Recipes array after adding new recipe:', recipes);

    // Confirming another recipe to add
    let anotherRecipe = window.confirm("Recipe added successfully! Do you want to add another recipe?");
    console.log('User wants to add another recipe:', anotherRecipe);
    if (!anotherRecipe) {
        // redirect to main recipe screen
        window.location.href = 'recipes.html'; // Change to your actual page URL
        console.log('Redirecting to recipes page.');
    } else {
        // Optionally clear the form or give the user feedback
        document.getElementById('recipeForm').reset();
    }
  });
  