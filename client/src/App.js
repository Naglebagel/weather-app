import React, { Component } from 'react';
import './App.css';
import Show from './Show/Show.js';
import Retrieve from './Retrieve/Retrieve.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      weatherCity: [],
      showWeather: false
    }
  }

  componentDidMount(){
    this.getReqCity();
  }

getReqCity = (city, country) => {
   fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city +','+ country +'&units=imperial&APPID=13bbcfeda97fb1726ea42ebf39817e5a')
    .then(response => response.json())
    .then(data => {
      const state = this.state;
      state.weatherCity.shift();
      state.weatherCity.push(data);
      console.log(state.weatherCity);
      state.showWeather = !this.state.showWeather
      this.setState(state)
    })
}

  render() {
    return (
      <div className="App">
      <h1>Whats the Weather?</h1>
        {this.state.showWeather ? <Retrieve getReqCity={this.getReqCity}/> : <Show weather={this.state.weatherCity} getReqCity={this.getReqCity} getReqZip={this.getReqZip}/>}
      </div>
    );
  }
}

export default App;
