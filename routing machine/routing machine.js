

var map = L.map('map').setView([30.0780, 31.2357], 13);

// OSM LAYER (OPEN STREAM MAP SERVER)
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  
var marker= L.marker([30.0780, 31.2357]).addTo(map);


map.on('click', function (e) {
    console.log(e)
    var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    L.Routing.control({
        waypoints: [
            L.latLng(30.0780, 31.23576),
            L.latLng(e.latlng.lat, e.latlng.lng)
        ]
    }).on('routesfound', function (e) {
        var routes = e.routes;
        console.log(routes);

        e.routes[0].coordinates.forEach(function (coord, index) {
            setTimeout(function () {
                marker.setLatLng([coord.lat, coord.lng]);
            }, 100 * index)
        })

    }).addTo(map);
})
