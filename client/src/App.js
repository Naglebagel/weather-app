import React, { Component } from 'react';
import './App.css';
import Show from './Show/Show.js';
import Retrieve from './Retrieve/Retrieve.js';
import Create from './CreateAccount/Create.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      weatherCity: [],
      showWeather: false,
      showNewAccount: false
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

newAccount = () => {
  const state = this.state;
  state.showNewAccount = !this.state.showNewAccount;
  this.setState(state);
}

  render() {
    return (
      <div className="App">
      <h1>Whats the Weather?</h1>
        <h2 onClick={this.newAccount}>Create Account</h2>
        {this.state.showNewAccount ? <Create getReqCity={this.getReqCity}/> : null}
        {this.state.showWeather ? <Retrieve getReqCity={this.getReqCity}/> : <Show weather={this.state.weatherCity} getReqCity={this.getReqCity} getReqZip={this.getReqZip}/>}
      </div>
    );
  }
}

export default App;
