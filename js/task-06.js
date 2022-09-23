const inputTextRef = document.querySelector('#validation-input');

const invalidRef = inputTextRef.addEventListener('blur', inputTextRef);

const validRef = inputTextRef.addEventListener('focus', inputTextRef);

inputTextRef.addEventListener('input', () => {
    if (inputTextRef.value.length < inputTextRef.dataset.length) {
        return inputTextRef.classList.add('invalid')
    }
    return inputTextRef.classList.replace('invalid', 'valid')
})


