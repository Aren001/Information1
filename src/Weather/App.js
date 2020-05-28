import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import SearchBar from "./SearchBar";
import './weather.css';

const UNIT = "metric";
const APIKEY = "7b26b01ab33c1a9a53306bef272420ec";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", city: "Sevan", forecastdata: "" };
    this.fetchData = this.fetchData.bind(this);
  }

  setWeatherData(data) {
    this.setState({ data });
  }

  setForecastData(data) {
    const forecastdata = data.list.map(forecast => {
      return {
        date: new Date(forecast.dt * 1000).toString().split(" ")[0],
        temp: {
          high: forecast.main.temp_max,
          low: forecast.main.temp_min
        }
      };
    });

    let dict = {};
    for (let i = 0; i < forecastdata.length; i++) {
      const date = forecastdata[i].date;
      const max = forecastdata[i].temp.high;
      const min = forecastdata[i].temp.low;
      if (date in dict) {
        dict[date].min.push(min);
        dict[date].max.push(max);
      } else {
        dict[date] = { min: [min], max: [max] };
      }
    }

    let newdata = {};
    for (let key in dict) {
      const add = (a, b) => a + b;
      const min_avg = dict[key].min.reduce(add, 0) / dict[key].min.length;
      const max_avg = dict[key].max.reduce(add, 0) / dict[key].max.length;
      newdata[key] = {
        date: key,
        min: Math.round(min_avg),
        max: Math.round(max_avg)
      };
    }
    this.setState({ forecastdata: newdata });
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  fetchWeatherData(city) {
    const API = "https://api.openweathermap.org/data/2.5/weather";
    const URL = `${API}?q=${city}&appid=${APIKEY}&units=${UNIT}`;
    fetch(URL, { method: "get" })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(result => this.setWeatherData(result))
      .catch(err => err);
  }

  fetchForecastData(city) {
    const API = "https://api.openweathermap.org/data/2.5/forecast";
    const URL = `${API}?q=${city}&appid=${APIKEY}&units=${UNIT}`;
    fetch(URL, { method: "get" })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(result => this.setForecastData(result))
      .catch(err => console.log(err));
  }

  fetchData(city) {
    this.fetchForecastData(city);
    this.fetchWeatherData(city);
  }

  componentDidMount() {
    this.fetchData(this.state.city);
  }

  render() {
    if (this.state.data && this.state.forecastdata) {
      return (
        <div className="wrapper"  style={{border:'5px solid black'}}>
          <SearchBar onSubmit={this.fetchData} />
          <Weather {...this.state.data} />
          <Forecast {...this.state} />
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default App;
