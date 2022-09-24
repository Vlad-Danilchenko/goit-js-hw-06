const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChenge);
// refs.nameLabel.textContent = "Anonymous";
function onInputChenge(event) {
  if (event.currentTarget.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  } else {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
  }
}
