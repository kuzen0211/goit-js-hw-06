const inputText = document.querySelector('#validation-input');

const invalid = inputText.addEventListener('blur', inputText);

const valid = inputText.addEventListener('focus', inputText);

inputText.addEventListener('input', () => {
    if (inputText.value.length < inputText.dataset.length) {
        return inputText.classList.add('invalid');
    }
    return inputText.classList.replace('invalid', 'valid');
});
