const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    const formData = new FormData(event.currentTarget);

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }

    const obj = {};

    formData.forEach((value, key) => {
        obj[key] = value;
    });

    console.log(obj);
    event.currentTarget.reset();
}
