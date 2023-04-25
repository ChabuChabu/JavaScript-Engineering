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

const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log(area);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const total = bill([10, 15, 30], 0.2);
console.log(total);
