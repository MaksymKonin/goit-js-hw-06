const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    alert(`Поле Email або Password пусті. Заповніть всі поля!`);
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
