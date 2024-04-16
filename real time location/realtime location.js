

var map = L.map('map').setView([30.0780, 31.2357], 13);

// OSM LAYER (OPEN STREAM MAP SERVER)
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


if (!navigator.geolocation) {
    console.log('====================================');
    console.log("your browser does not support geolocation features");
    console.log('====================================');
} else {
    setInterval(() => {
            navigator.geolocation.getCurrentPosition(getPosition)
        }, 2000);
    }
var marker,circle;

function getPosition(position) {
    var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    
    if(marker) {
            map.removeLayer(marker)
        }

        if(circle) {
            map.removeLayer(circle)
        }
    console.log('====================================');
    console.log(latitude, longitude) ;
    console.log('====================================');
     marker= L.marker([latitude, longitude])
     circle= L.circle([latitude, longitude], {radius:accuracy})
    var featureGroup = L.featureGroup([marker, circle]).addTo(map)
    //to zoom to the location automatically
    map.fitBounds(featureGroup.getBounds())
}

