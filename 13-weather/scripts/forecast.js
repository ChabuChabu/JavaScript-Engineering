class Forecast {
  constructor() {
    this.key = "KDREgFG7wD8vzunmyocuHTwmWym2h91G";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURL =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityName = await this.getCity(city);
    const weather = await this.getWeather(cityName.Key);

    return {
      cityName,
      weather,
    };
  }

  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURL + query);
    const data = await response.json();
    return data[0];
  }

  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;

    const response = await fetch(this.weatherURI + query);
    const data = await response.json();

    return data[0];
  }
}
