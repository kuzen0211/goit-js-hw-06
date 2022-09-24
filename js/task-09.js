function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const colorByChange = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');

btnChangeColor.addEventListener('click', () => {
    body.style.backgroundColor = getRandomHexColor();
    colorByChange.textContent = body.style.backgroundColor;
});
