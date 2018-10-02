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

        mymap.locate({setView: true, watch: true})
        .on('locationfound', function(e){
            var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
            var marker2 = L.marker([34.005861999999995, -83.928153]).bindPopup('Your are here :)');
            mymap.addLayer(marker);
            mymap.addLayer(marker2);
        })
       .on('locationerror', function(e){
            console.log(e);
            alert("Location access denied.");
        });
    }

    render(){
        return(
            <div id="mapid"></div>
        )
    }
}

export default MapImage;