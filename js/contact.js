const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const male = document.getElementById("male");
const female = document.getElementById("female");
const other = document.getElementById("other");
const submitButton = document.getElementById("submitButton");

const onInputChange = () => {
  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" &&
    comment.value !== "" &&
    (male.checked === true || female.checked === true || other.checked === true)
  ) {
    submitButton.disabled = false;
  }
};

const onSubmit = () => {
  console.log(firstName.id, firstName.value);
  console.log(lastName.id, lastName.value);
  console.log(email.id, email.value);
  console.log(comment.id, comment.value);
  console.log(male.id, male.checked);
  console.log(female.id, female.checked);
  console.log(other.id, other.checked);
  submitButton.disabled = true;
  submitButton.classList.remove("form-input");
  submitButton.classList.add("form-input-finished");
};

submitButton.addEventListener("click", onSubmit);

firstName.addEventListener("input", onInputChange);
lastName.addEventListener("input", onInputChange);
email.addEventListener("input", onInputChange);
comment.addEventListener("input", onInputChange);

male.addEventListener("click", onInputChange);
female.addEventListener("click", onInputChange);
other.addEventListener("click", onInputChange);
