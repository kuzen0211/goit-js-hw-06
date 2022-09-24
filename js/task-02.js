const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const itemCreate = ingredients.map(element => {
    const item = document.createElement('li');
    item.textContent = element;
    item.classList.add('item');
    return item;
});

ingredientsList.append(...itemCreate);

console.log(ingredientsList);
