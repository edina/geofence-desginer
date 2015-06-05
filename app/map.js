import 'jspm_packages/npm/leaflet@0.7.3/dist/leaflet.css!';
import L from 'leaflet';

export default class Mapper {
    constructor() {
        console.log('ES6 Class!');
    }
    
    init() {
        // specify the path to the leaflet images folder
        L.Icon.Default.imagePath = 'jspm_packages/npm/leaflet@0.7.3/dist/images/';

        // initialize the map
        var map = new L.Map('map').setView([37.75, -122.23], 10);

        // set the position and zoom level of the map
        map.setView([47.63, -122.32], 11);
    
        // set an attribution string
        var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';

        // set the tiles the map will use
        var tiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        // create a tileLayer with the tiles, attribution
        var layer = new L.tileLayer(tiles, {
            maxZoom: 18,
            attribution: attribution
        });

        // add the tile layer to the map
        layer.addTo(map);
    }
}