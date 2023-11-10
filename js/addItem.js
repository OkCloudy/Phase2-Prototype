let popUp = document.getElementById("popup");

function openPopup() {
    popUp.classList.add("open-popup");
}

function closePopup() {
    window.location.href = 'inventory.html'; // Change to your actual page URL
}

document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submission prevented.');
    // Create a new recipe object from the form inputs
    let newRecipe = {
      name: document.getElementById('recipeName').value,
      quantity: parseInt(document.getElementById('quantity').value, 10),
      notes: document.getElementById('notes'),
      // Add more fields as necessary
    };

    console.log('New recipe object:', newRecipe);

    // Retrieve the existing recipes from session storage
    let recipes = JSON.parse(sessionStorage.getItem('items')) || [];

    // Add the new recipe to the array
    recipes.push(newRecipe);

    // Save the updated recipes array back to session storage
    sessionStorage.setItem('items', JSON.stringify(recipes));

    console.log('Recipes array after adding new recipe:', recipes);
    window.location.href = 'inventory.html'; // Change to your actual page URL

    // Confirming added recipe to add
    //openPopup();
    /*
    if (!anotherRecipe) {
        // redirect to main recipe screen
        window.location.href = 'recipes.html'; // Change to your actual page URL
        console.log('Redirecting to recipes page.');
    } else {
        // Optionally clear the form or give the user feedback
        document.getElementById('recipeForm').reset();
    }
    */
  });