//fetch api
const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};

getTodos().then((data) => console.log(data));

// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
