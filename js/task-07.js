const refs = {
  input: document.querySelector("#font-size-control"),
  nameLabel: document.querySelector("#text"),
};
refs.input.addEventListener("input", onInputChenge);
function onInputChenge(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.style.fontSize = `${event.currentTarget.value}px`;
}
