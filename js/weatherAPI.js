$(document).ready(function() {
  var lat, lon;
  var appID = "a4b0ab90a28dc5c1f397f762eb6efe76";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
    })
  }

  var queryURL = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + appID;

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response)
  });
});