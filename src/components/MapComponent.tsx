import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
//import L from 'leaflet';
import type { MapProps } from '../types';

/*delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
 iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
 iconUrl: require('leaflet/dist/images/marker-icon.png').default,
shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});*/

const MapComponent: React.FC<MapProps> = ({
  center,
  zoom = 13,
  markers = [],
  height = '400px'
}) => {
  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      style={{ height, width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       // attribution="&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
      />
      {markers.map(marker => (
        <Marker key={marker.id} position={[marker.position.lat, marker.position.lng]}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
