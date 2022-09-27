const formRef = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;
  // console.log(email.value);
  // console.log(password.value);

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  return formRef.reset();
};

formRef.addEventListener("submit", handleSubmit);
