import React from 'react';

class Map extends React.Component {
  constructor(props){
      super(props);
  } // end constructor

  componentDidMount(){
    // Define all the variables here
    const mapDisplay = document.getElementById('map')
    const searchBox = new google.maps.places.SearchBox(input);
    const infoWindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    const map = new google.maps.Map(mapDisplay, {
      center: {lat: 37.775, lng: -122.435},
      zoom: 13
    }) // const map

  } // end componentDidMount

  render() {
    return (
      <div>
        <div id="map"></div>
      </div>
    ); // return
  } // render
} // end class

export default Map;

// var map;
// var infoWindow;
// var service;
// var sanFran = {lat: 37.775, lng: -122.435}; // Coordinate for SF
//
// function initMap() {
//
//   map = new google.maps.Map(document.getElementById('map'), {
//    center: sanFran,
//    zoom: 13
//   });
//
//   infowindow = new google.maps.InfoWindow();
//   service = new google.maps.places.PlacesService(map);
//   map.addListener('idle', performSearch)
// }
//
// function performSearch() {
//     var request = {
//       location: sanFran,
//       radius: 500,
//       query: 'hotel'
//     };
//     service.textSearch(request, callback);
//   }
//
// function callback(results, status) {
//   if (status !== google.maps.places.PlacesServiceStatus.OK) {
//     console.error(status);
//     return;
//     }
//   for (var i = 0; i < results.length; i++) {
//     var place = results[i];
//     createMarker(place);
// }
//
// function createMarker(place) {
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });
//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent('<div class="infowindow" ><strong>' + place.name + '</strong><br>' +
//                 'Address: ' +
//                 place.formatted_address + '</div><br>');
//     infowindow.open(map, this);
//   });
// }
//
// var list = document.querySelector('.list');
// list.innerHTML = ["32", "31"]
//
// let input = document.getElementById('searchQuery');
// console.log(input.search);
