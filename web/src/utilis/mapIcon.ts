import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  export default mapIcon;