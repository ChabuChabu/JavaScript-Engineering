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

// const password = "password1234";

// if (password.length >= 12 && password.includes("@")) {
//   console.log("That password is mighty strong");
// } else if (password.length >= 8 || password.includes("@")) {
//   console.log("That password is strong enough!");
// } else {
//   console.log("Password is not long enougth");
// }

/************************************** logical NOT ***********************************/

// let user = false;

// if (!user) {
//   console.log("It is indeed false");
// } else {
//   console.log("It is true");
// }

/************************************** break and continue ***********************************/

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log("Your score:", scores[i]);

//   if (scores[i] === 100) {
//     console.log("Congrats,you got the top score!!");
//     break;
//   }
// }

/************************************** switch statements ***********************************/

// const grade = "A";

// switch (grade) {
//   case "A":
//     console.log("You got an A");
//     break;
//   case "B":
//     console.log("You got an B");
//     break;
//   case "C":
//     console.log("You got an C");
//     break;
//   case "D":
//     console.log("You got an D");
//     break;
//   default:
//     console.log("Not a valid grade");
// }

/************************************** variable & block scope ***********************************/

const age = 30;

if (true) {
  const age = 50;
  const name = "shaun";
  console.log("inside first code block", age, name);

  if (true) {
    const age = 20;
    console.log("inside the first code block", age);
  }
}

console.log("outside code block", age);
