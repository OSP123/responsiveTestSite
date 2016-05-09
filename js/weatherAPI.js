$(document).ready(function() {
  var lat, lon;
  var appID = "a4b0ab90a28dc5c1f397f762eb6efe76";

  function success(pos) {
    var crd = pos.coords;
    lat = crd.latitude;
    lon = crd.longitude;
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  alert(lat);
  alert(lon);

  navigator.geolocation.getCurrentPosition(success, error);

  var queryURL = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + appID;

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
  });
});