const mainEl = document.querySelector('#categories');

const categoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryEl.length}`);

const titleEl = document.querySelectorAll('h2')
for (const title of titleEl) {
    console.log(`Category: ${title.textContent}`);

    console.log(`Elements:${title.nextElementSibling.children.length}`)
}


