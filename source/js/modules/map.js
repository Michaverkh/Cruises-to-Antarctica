// 59.93859, 30.32269
import './leaflet';

const HOME_POSITION = {
    lat: 59.93859,
    lng: 30.32269,
  };

export const initMap = function () {
    const map = L.map('map-canvas')
    .setView({
      lat: 59.93859,
      lng: 30.32269,
    }, 12);
  
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map);

    const mainPinIcon = L.icon({
        iconUrl: '../../img/sprite/map.svg',
        iconSize: [18, 22],
        iconAnchor: [9, 22],
      });
      
      const MainMarker = L.marker(
        HOME_POSITION,
        {
          draggable: true,
          icon: mainPinIcon,
        },
      );
      
      MainMarker.addTo(map);
} 
