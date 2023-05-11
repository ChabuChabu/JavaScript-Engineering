const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    alert("Please click OK,and enter todo task");
  }
});

//delete todos

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//search functionality

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((task) => !task.textContent.toLowerCase().includes(term))
    .forEach((task) => task.classList.add("filtered"));

  Array.from(list.children)
    .filter((task) => task.textContent.toLowerCase().includes(term))
    .forEach((task) => task.classList.remove("filtered"));
};
//key up
search.addEventListener("keyup", () => {
  const term = search.value.trim().ToLowerCase();
  filterTodos(term);
});
