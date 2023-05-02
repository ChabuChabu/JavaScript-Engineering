const form = document.querySelector(".sign-up");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(username.value);
  console.log(form.username.value);
});

//testing Regex
const username = "shaunband";
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username);

if (result) {
  console.log("The regex test passed");
} else {
  console.log("The regex test failed!");
}
