const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }

    formData.forEach((name, value) => {
        console.log(value, name);
    });
    event.currentTarget.reset();
}
