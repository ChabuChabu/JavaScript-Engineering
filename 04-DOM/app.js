const para = document.querySelector("p");

//console.log(para.innerText);
//para.innerText = "ninjas are awesome!";

/****************** Changing the inner text ***********************/

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += "new text";
// });

/****************** Changing the html ***********************/

// const content = document.querySelector(".content");

// //console.log(content.innerHTML);
// // content.innerHTML = "<h2> This is a new </h2>";

// const people = ["mario", "luigi", "yoshi"];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

/****************** setting attributes ***********************/
const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.thenetninja.co.uk");
link.innerText = "The Net Ninja Website";
const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
mssg.setAttribute("style", "color: green;");
