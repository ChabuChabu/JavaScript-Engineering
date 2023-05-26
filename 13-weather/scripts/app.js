const cityForm = document.querySelector("form");

updateCity = async (city) => {
  const cityName = await getCity(city);
  const weather = await getWeather(cityName.Key);

  return {
    cityName,
    weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();

  //city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with city
  updateCity(city)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
