var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=076c86c46532d43c144ab9c4b368b7eb'

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  console.log(url)
  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    });
}