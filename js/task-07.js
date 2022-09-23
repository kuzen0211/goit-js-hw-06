const inputSlider = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

inputSlider.addEventListener('input', () => {
    textFontSize.style.fontSize = `${inputSlider.value}px`;
});
