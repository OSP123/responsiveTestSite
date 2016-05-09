$(document).ready(function() {
  var lat, lon;
  var appID = "a4b0ab90a28dc5c1f397f762eb6efe76";

 function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function showPosition(position) {
      lat = position.coords.latitude;
      alert(lat);
      lon = position.coords.longitude; 
      alert(lon);
  }

  var queryURL = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + appID;

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response)
  });
});