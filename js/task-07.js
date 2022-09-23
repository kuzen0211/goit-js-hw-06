const inputSliderRef = document.querySelector("#font-size-control");
console.log(inputSliderRef);

const textFontSizeRef = document.querySelector('#text');
console.log(textFontSizeRef);

inputSliderRef.addEventListener('input', () => {
    textFontSizeRef.style.fontSize = `${inputSliderRef.value}px`
})

