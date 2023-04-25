/**************************************for loops ***********************************/

// for (let i = 0; i < 5; i++) {
//   console.log("In loop:", i);
// }

// console.log("Loop is finished");

// const names = ["shaun", "luigi", "mario"];

// for (let i = 0; i < names.length; i++) {
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

/**************************************while loops ***********************************/
// const names = ["shaun", "luigi", "mario"];
// let i = 0;

// while (i < 5) {
//   console.log("In while loop:", i);
//   i++;
// }

// let i = 0;

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

/************************************** do while loops ***********************************/

// let i = 5;

// do {
//   console.log("variable of i is:", i);
//   i++;
// } while (i < 5);

/************************************** if statements ***********************************/

// const age = 25;

// if (age > 20) {
//   console.log("You are over 20 years old");
// }

// const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

// if (ninjas.length > 4) {
//   console.log("That is a lot of ninjas!");
// }

// const password = "p@sword12345";

// if (password.length >= 12) {
//   console.log("That password is mighty strong");
// } else if (password.length >= 8) {
//   console.log("That password is long enough!");
// } else {
//   console.log("Password is not long enougth");
// }

/************************************** Logical Operators OR and AND && ***********************************/

const password = "password1234";

if (password.length >= 12 && password.includes("@")) {
  console.log("That password is mighty strong");
} else if (password.length >= 8 || password.includes("@")) {
  console.log("That password is strong enough!");
} else {
  console.log("Password is not long enougth");
}

/************************************** logical NOT ***********************************/

let user = false;

if (!user) {
  console.log("It is indeed false");
} else {
  console.log("It is true");
}
