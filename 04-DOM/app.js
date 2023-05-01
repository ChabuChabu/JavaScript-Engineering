// const para = document.querySelector("p");

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
const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");
const button = document.querySelector("button");

/*******add items to dom *******/
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  //ul.append(li);
  ul.prepend(li);
});

// ul.remove();

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("Item clicked");
    // console.log(e);
    // console.log(e.target);
    // e.target.style.textDecoration = "line-through";

    /*******remove of items from dom *******/
    e.target.remove();
  });
});
