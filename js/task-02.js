const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add("item");
  return ingredientItemEl;
});

console.log(elements);

const ingredientsUlEl = document.querySelector("#ingredients");
ingredientsUlEl.append(...elements);
