var map = L.map('map').setView([37.88437176085360, -4.779524803161621], 14);

// Capas base
var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

var stamenLayer = L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
    attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design<\/a>, ' +
    '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0<\/a> &mdash; ' +
    'Map data {attribution.OpenStreetMap}',
    minZoom: 12,
    maxZoom: 18
}).addTo(map)

// Añade el control

L.control.sideBySide(stamenLayer, osmLayer).addTo(map);