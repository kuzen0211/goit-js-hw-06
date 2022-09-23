const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', getItem);
btnDestroy.addEventListener('click', destroyBox);

function getItem() {
    const amount = document.querySelector('input').value;
    createBoxes(amount);
}

function createBoxes(amount) {
    let innerSize = 30;
    const boxesCreated = [];

    for (let i = 0; i < amount; i += 1) {
        const size = innerSize + i * 10;
        const div = document.createElement('div');
        div.style.width = String(`${size}`) + 'px';
        div.style.height = String(`${size}`) + 'px';
        div.style.backgroundColor = getRandomHexColor();
        boxesCreated.push(div);
    }
    boxes.append(...boxesCreated);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function destroyBox() {
    boxes.innerHTML = '';
}
