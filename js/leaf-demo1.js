// See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map('map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2,
})

 L.tileLayer.grayscale('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="leaf-demo1.js"]')
  .attr('src')
  .replace('leaf-demo.js', '')

var myIcon = L.icon({
  iconUrl: '/images/pin24.png',
  iconRetinaUrl: '/images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

for (var i = 0; i < markers.length; ++i) {
  L.marker([markers[i].lat, markers[i].lng], { icon: L.icon({
    iconUrl: markers[i].image,
    iconRetinaUrl: markers[i].image,
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14],
  }) })
    .bindPopup(
      '<a href="' +
        markers[i].url +
        '" target="_blank">' +
        markers[i].name +
        '</a>'
    )
    .addTo(map)
}
