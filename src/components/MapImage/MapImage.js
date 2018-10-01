import React, {Component} from "react";
import L from "leaflet";

class MapImage extends Component{

    componentDidMount(){
        var mymap = L.map('mapid').setView([51.505, -0.09], 15);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYm9iYnJvd24xOCIsImEiOiJjam1xb242YzYxc2U0M3ZueXM4dzQ0dmhiIn0.7H6qz0omv4yGsETQ4HcaHA'
        }).addTo(mymap);
    }

    render(){
        return(
            <div id="mapid"></div>
        )
    }
}

export default MapImage;