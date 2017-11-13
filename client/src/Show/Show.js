import React, { Component } from 'react';
import './Show.css'

class Show extends Component {

	render() {
		const cityData = this.props.weather.map((weather, i) => {
			return <div key={i}>
					<h4> Current weather in {weather.name}</h4>
					<li><img alt={weather.weather[0].description} src={'http://openweathermap.org/img/w/'+ weather.weather[0].icon + '.png'}></img></li>
					<li>{weather.weather[0].main}</li>
					<li>{weather.main.temp}</li>
					</div>
		})

		return(
			<div>
				<ul>
				{cityData}
				</ul>
			</div>
			)
		 
	}
}

export default Show


