import React, {Component} from 'react';

class Weather extends Component{

  constructor(props){
    super(props);
    this.state = {
        city:'Hyderabad', country:'India',

        api_city:'NA', api_country:'NA',
        curr_temp:'NA', pressure:'NA',
        humidity:'NA', min_temp:'NA',
        max_temp:'NA', visibility:'NA',
        sunrise:'NA', sunset:'NA',
        main:'NA', description:'NA'
    }
  }
  componentDidMount(){
     this.getWeatherData();
  }

 getWeatherData = ()=>{
    let city = this.state.city;
    let country = this.state.country;

    let url = `https://openweathermap.org/data/2.5/weather?q=${city},${country}&appid=b6907d289e10d714a6e88b30761fae22`;
    fetch(url).then((data)=>{
        data.json().then((json)=>{
            
            let sunriseTime = new Date(json.sys.sunrise * 1000);
            let sunsetTime = new Date(json.sys.sunset * 1000);
            sunriseTime = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}:${sunriseTime.getSeconds()}`;
            sunsetTime = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}:${sunsetTime.getSeconds()}`;
            
            this.setState({
                api_city:json.name,
                api_country:json.sys.country,
                curr_temp:json.main.temp,
                pressure:json.main.pressure,
                humidity:json.main.humidity,
                min_temp:json.main.temp_min,
                max_temp:json.main.temp_max,
                visibility:json.visibility,
                sunrise:sunriseTime,
                sunset:sunsetTime,
                main:json.weather[0].main,
                description:json.weather[0].description
            });

        });
    });

  }

  render() {
    return(
      <div id="weather-container">
         <label>
              <span>City</span>
             <input placeholder="Enter city name" value={this.state.city} onChange={(e)=>{this.setState({city:e.target.value})}}/>
         </label>
         <label>
              <span>Country</span>
             <input placeholder="Enter counter name" value={this.state.country} onChange={(e)=>{this.setState({country:e.target.value})}}/>
         </label>
         <button onClick={this.getWeatherData}>Get Weather</button>
        
         <table>
             <tbody>
                 <tr>
                     <th>City</th>
                     <td>{this.state.api_city}</td>
                     <th>Country</th>
                     <td>{this.state.api_country}</td>
                 </tr>
                 <tr>
                     <th>Current Temprature</th>
                     <td>{this.state.curr_temp}</td>
                     <th>Pressure</th>
                     <td>{this.state.pressure}</td>
                 </tr>
                 <tr>
                     <th>Humidity</th>
                     <td>{this.state.humidity}</td>
                     <th>Minimum Temprature</th>
                     <td>{this.state.min_temp}</td>
                 </tr>
                 <tr>
                     <th>Maximum Temprature</th>
                     <td>{this.state.max_temp}</td>
                     <th>visibility</th>
                     <td>{this.state.visibility} </td>
                 </tr>
                 <tr>
                     <th>Sunrise</th>
                     <td>{this.state.sunrise}</td>
                     <th>Sunset</th>
                     <td>{this.state.sunset}</td>
                 </tr>
                 <tr>
                     <th>Main</th>
                     <td>{this.state.main}</td>
                     <th>Description</th>
                     <td>{this.state.description}</td>
                 </tr>
             </tbody>
         </table>
        
      </div>
    );
  }
}

export default Weather;
