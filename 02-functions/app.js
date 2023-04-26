//function declaration
// function greet() {
//   console.log("Hello there!!");
// }
// greet();

//function expression

// const speak = function (name, time) {
//   console.log(`good ${time} ${name}`);
// };

// speak("chabu", "morning");

//Returning values

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

//Arrows functions

// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log(area);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// const total = bill([10, 15, 30], 0.2);
// console.log(total);

//functions

// const name = "chabu";

// const greet = () => "Hello";

// let userOne = greet();

// console.log(userOne);

//methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

/************Callback & foreach ********************/

// let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// const logPerson = (person, index) => {
//   console.log(`${index} -hello ${person}`);
// };

// people.forEach((person, index) => {
//   console.log(index, person);
// });

// people.forEach(logPerson);

// for each example

const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;

people.forEach((person) => {
  //create html template
  html += `<li style="color: purple">${person}</li>`;
});

ul.innerHTML = html;
