var React = require('react');

var Weather = React.createClass({
  getInitialState: function () {
    return {weather: ""};
  },
  componentDidMount: function () {
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      var longitude = position.coords.longitude;
      var latitude = position.coords.latitude;

      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
          if(xmlhttp.status === 200){
            that.setState({weather: JSON.parse(xmlhttp.response)});
          }
          else { 
            alert('something else other than 200 was returned');
          }
        }
      };

      xmlhttp.open("GET",
                   "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +
                   "&APPID=645c5d39c7603f17e23fcaffcea1a3c1");
      xmlhttp.send();
    });
  },
  render: function () {

    if (this.state.weather !== "") {
      var description = this.state.weather.weather[0]["description"];
      var temperature = this.state.weather.main.temp;
    }
    return(
      <div>
        <label>Weather Description:</label>
        <div>{description}</div>
        <label>Current Temperature (Kelvin):</label>
        <div>{temperature}</div>
      </div>
    );
  }
});

module.exports = Weather;
