/***************filter method****************/
// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//   return score > 20;
// });

// console.log(filteredScores);

// const users = [
//   { name: "shaun", premium: true },
//   { name: "yoshi", premium: false },
//   { name: "mario", premium: false },
//   { name: "chun-li", premium: true },
// ];

// const premiumUsers = users.filter((user) => user.premium);

// console.log(premiumUsers);

/***************map method****************/

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => price / 2);
// console.log(salePrices);

// const products = [
//   { name: "gold star", price: 20 },
//   { name: "mushroom", price: 40 },
//   { name: "green shells", price: 30 },
//   { name: "banana skin", price: 10 },
//   { name: "red shells", price: 50 },
// ];

// const saleProducts = products.map((product) => {
//   if (product.price > 30) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });

// console.log(saleProducts);

/***************map method****************/

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);

// const scores = [
//   { player: "mario", score: 50 },
//   { player: "yoshi", score: 30 },
//   { player: "mario", score: 70 },
//   { player: "yoshi", score: 60 },
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//   if (curr.player === "mario") {
//     acc += curr.score;
//   }
//   return acc;
// }, 0);

// console.log(marioTotal);

/***************chaining array methods****************/

const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 10 },
  { name: "red shell", price: 40 },
  { name: "banana skin", price: 5 },
  { name: "mushroom", price: 50 },
];

// const filtered = products.filter((product) => product.price > 20);

// const promos = filtered.map((product) => {
//   return `the ${product.name} is ${product.price / 2} kwacha`;
// });

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} kwacha`);

console.log(promos);
