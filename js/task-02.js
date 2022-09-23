const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const test = ingredients.map((element, index) => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');
  return liEl;
});



ingredientsListEl.append(...test);

console.log(ingredientsListEl);