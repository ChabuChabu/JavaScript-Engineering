// const para = document.querySelector("p");
// const ul = document.querySelector("ul");
// const items = document.querySelectorAll("li");
// const button = document.querySelector("button");
// const copy = document.querySelector(".copy-me");
// const box = document.querySelector(".box");

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
// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.thenetninja.co.uk");
// link.innerText = "The Net Ninja Website";
// const mssg = document.querySelector("p");
// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color: green;");

/****************** adding and removing styles ***********************/

// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

// const paras = document.querySelectorAll("p");
// paras.forEach((p) => {
//   if (p.textContent.includes("error")) {
//     p.classList.add("error");
//   } else if (p.textContent.includes("success")) {
//     p.classList.add("success");
//   }
// });

// const title = document.querySelector(".title");
// title.classList.toggle("test");
// title.classList.toggle("test");

// const article = document.querySelector("article");
// Array.from(article.children).forEach((child) => {
//   child.classList.add("article-element");
// });

// const title = document.querySelector("h2");
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

/****************** events and event listiners ***********************/

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("You clicked me");
// });

/*******add items to dom *******/
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   //ul.append(li);
//   ul.prepend(li);
// });

// ul.remove();

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log("Event in LI");
//     e.stopPropagation();
//     // console.log(e);
//     // console.log(e.target);
//     // e.target.style.textDecoration = "line-through";

//     /*******remove of items from dom *******/
//     e.target.remove();
//   });
// });
/******************** event bubbling *******************/
// ul.addEventListener("click", (e) => {
//   console.log(e);
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

/******************** other events *******************/

// copy.addEventListener("copy", () => {
//   console.log("My content is copyright protected");
// });

// box.addEventListener("mousemove", (e) => {
//   box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
// });

// document.addEventListener("wheel", (e) => {
//   console.log(e.pageX, e.pageY);
// });

/******************** making a popup*******************/

const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");
const wrapper = document.querySelector(".popup-wrapper");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

wrapper.addEventListener("click", () => {
  popup.style.display = "none";
});
