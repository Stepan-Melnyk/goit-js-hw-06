const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsElements = ingredients.map(ingredient => {
  const ingredientElement = document.createElement('li');
  ingredientElement.classList.add('ingredients-item');
  ingredientElement.textContent = ingredient;
  return ingredientElement;
});

ingredientsList.append(...ingredientsElements);