//object literals

// const blogs = [
//   { title: "Why mac and cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 },
// ];

// console.log(blogs);

// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@thenetninja.co,uk",
//   location: "berlin",
//   blogs: [
//     { title: "Why mac and cheese rules", likes: 30 },
//     { title: "10 things to make with marmite", likes: 50 },
//   ],
//   login: function () {
//     console.log("The user logged in");
//   },
//   logout: function () {
//     console.log("The user logged out");
//   },
//   logBlogs: function () {
//     //console.log(this);
//     console.log("This use has written the following blogs");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// user.logBlogs();

/***********************  Math Object ****************************/

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 5));

/***********************  Primitive values ****************************/

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

/***********************  referecne variable ****************************/

const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);
