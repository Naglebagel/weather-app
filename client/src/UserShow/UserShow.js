import React, { Component } from 'react';
import './UserShow.css';



class UserShow extends Component {

	constructor(){
		super();

		this.state = {
			
		}
	}

	componentDidMount(){
		this.props.userCities()
	}


	render() {
		const cityData = this.props.dispArr.map((weather, i) => {
			return <div key={i}>
					<h4> Current weather in {weather.name}</h4>
					<li><img alt={weather.weather[0].description} src={'http://openweathermap.org/img/w/'+ weather.weather[0].icon + '.png'}></img></li>
					<li>{weather.weather[0].main}</li>
					<li>{weather.main.temp} ℉</li>
					</div>
		})
		
		return(
			<ul className="userDiv">
				{cityData}
			</ul>
			)
		 
	}
}

export default UserShow