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

/***************find method****************/

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find((score) => score > 30);

// console.log(firstHighScore);

/*************** sorting strings ****************/

//example 1
const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

//the sort array is destructive as it alters the original array
// names.sort();
// names.reverse();
// console.log(names);

// //example 2
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((a, b) => a - b);
//scores.sort();
// scores.reverse();
console.log(scores);

//example 3

const players = [
  { player: "mario", score: 20 },
  { player: "luigi", score: 10 },
  { player: "chun-li", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "shaun", score: 70 },
];

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// players.sort((a, b) => b.score - a.score);

// console.log(players);
