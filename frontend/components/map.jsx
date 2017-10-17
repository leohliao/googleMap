import React from 'react';


class Map extends React.Component {
  constructor(props){
      super(props);

  } // end constructor

  componentDidMount(){
    // Define all the variables here
    const input = document.getElementById('pac-input');
    const mapDisplay = document.getElementById('map')
    // const searchBox = new google.maps.places.SearchBox(input);
    // const infoWindow = new google.maps.InfoWindow();

    const map = new google.maps.Map(mapDisplay, {
      center: {lat: 37.775, lng: -122.435},
      zoom: 13
    }) // const map

    const searchBox = new google.maps.places.SearchBox(input);

    map.addListener('bounds_changed', function() {
         searchBox.setBounds(map.getBounds());
    });

    var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    }); // end SearchBox Listener

  } // end componentDidMount

  render() {
    return (
      <div>
        <input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
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
