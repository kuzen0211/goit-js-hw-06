const categoryEL = document.querySelector('#categories');

const listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);

const titleByItem = document.querySelectorAll('h2');
for (const title of titleByItem) {
    console.log(`Category: ${title.textContent}`);

    console.log(`Elements:${title.nextElementSibling.children.length}`);
}
