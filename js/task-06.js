const formRef = document.querySelector(".login-form");

const inputRef = document.querySelector("#validation-input");
// console.log(inputRef);

const onInputBlur = (event) => {
  // console.log("blur");
  // console.log(event.currentTarget.dataset.length);
  const requiredLength = Number(event.target.dataset.length);
  // console.log(requiredLength);
  if (event.currentTarget.value.length >= requiredLength) {
    changeClass("valid", "invalid", event.target);
  } else {
    changeClass("invalid", "valid", event.target);
    // console.log(event.currentTarget.value);
    // event.target.classList.add("invalid");
    // event.target.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", onInputBlur);

function changeClass(add, remove, elem) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}
