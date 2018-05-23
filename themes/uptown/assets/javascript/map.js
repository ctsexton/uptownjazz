function initMap() {
var uptown = {lat: -37.802099, lng: 144.977536};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: uptown
});
var marker = new google.maps.Marker({
  position: uptown,
  map: map
});
}
