const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (response.status != 200) {
    throw new Error("Cannot fetch the data");
  }

  const data = await response.json();
  return data[0];
};

getTodos()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
