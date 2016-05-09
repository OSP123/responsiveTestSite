$(document).ready(function() {
  var lat, lon;
  var appID = "a4b0ab90a28dc5c1f397f762eb6efe76";

   function errorHandler(err) {
      if(err.code == 1) {
         alert("Error: Access is denied!");
      }
      
      else if( err.code == 2) {
         alert("Error: Position is unavailable!");
      }
   }

  navigator.geolocation.getCurrentPosition(showLocation, errorHandler, {timeout:10000});
  
  function showLocation (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
  }

  alert(lat);
  alert(lon);

  var queryURL = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + appID;

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
  });
});