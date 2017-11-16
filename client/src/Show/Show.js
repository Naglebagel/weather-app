import React, { Component } from 'react';
import './Show.css'

class Show extends Component {

	render() {
		const cityData = this.props.weather.map((weather, i) => {
			return <div key={i}>
					<h4> Current weather in {weather.name}</h4>
					<li className="showLi"><img alt={weather.weather[0].description} src={'http://openweathermap.org/img/w/'+ weather.weather[0].icon + '.png'}></img></li>
					<li className="showLi">{weather.weather[0].main}</li>
					<li className="showLi">{weather.main.temp} ℉</li>
					</div>
		})

		return(
				<ul className="showUl">
				{cityData}
				</ul>
			)
		 
	}
}

export default Show


