const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);



function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    
  formData.forEach(({ email, password }) => {
      console.log(password, email)
  })
  event.currentTarget.reset();
}
