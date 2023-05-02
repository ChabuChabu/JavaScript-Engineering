const form = document.querySelector(".sign-up");
const feedback = document.querySelector(".feedback");

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    //valid feedback
    feedback.textContent = "That username is valid!";
  } else {
    feedback.textContent =
      "The username must contain letters only & must be between 6 and 12 characters long";
  }
});

//live feedback

form.username.addEventListener("keyup", (e) => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
