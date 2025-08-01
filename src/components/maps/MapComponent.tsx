import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import type { MapProps, MapMarker, MapRoute, Location } from '../../types';

// Render de estados de carga del mapa
const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return (
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
          <div className="w-8 h-8 border-b-2 rounded-full animate-spin border-primary-600"></div>
        </div>
      );
    case Status.FAILURE:
      return (
        <div className="flex items-center justify-center h-64 rounded-lg bg-red-50">
          <p className="text-red-600">Error al cargar el mapa</p>
        </div>
      );
    case Status.SUCCESS:
      return <></>;
  }
};

// Función para parsear resultados del geocoder a tipo Location
const parseGeocoderResultToLocation = (result: google.maps.GeocoderResult): Location => {
  const components = result.address_components;

  const getComponent = (type: string) =>
    components.find((c) => c.types.includes(type))?.long_name || '';

  return {
    lat: result.geometry.location.lat(),
    lng: result.geometry.location.lng(),
    address: result.formatted_address,
    city: getComponent('locality') || getComponent('administrative_area_level_2'),
    state: getComponent('administrative_area_level_1'),
    zipCode: getComponent('postal_code')
  };
};

interface GoogleMapProps {
  center: Location;
  zoom: number;
  markers?: MapMarker[];
  routes?: MapRoute[];
  onLocationSelect?: (location: Location) => void;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  center,
  zoom,
  markers = [],
  routes = [],
  onLocationSelect,
  height = '400px'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  // Inicializar el mapa
  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      setMap(newMap);

      // Listener de click para seleccionar ubicación
      if (onLocationSelect) {
        newMap.addListener('click', (e: google.maps.MapMouseEvent) => {
          const lat = e.latLng?.lat();
          const lng = e.latLng?.lng();

          if (lat && lng) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
              if (status === 'OK' && results?.[0]) {
                const location = parseGeocoderResultToLocation(results[0]);
                onLocationSelect(location);
              } else {
                onLocationSelect({
                  lat,
                  lng,
                  address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
                  city: '',
                  state: '',
                  zipCode: ''
                });
              }
            });
          }
        });
      }
    }
  }, [ref, map, center, zoom, onLocationSelect]);

  // Dibujar marcadores
  useEffect(() => {
    if (map) {
      markers.forEach((marker) => {
        const mapMarker = new google.maps.Marker({
          position: { lat: marker.position.lat, lng: marker.position.lng },
          map,
          title: marker.title,
          icon: marker.icon
        });

        if (marker.onClick) {
          mapMarker.addListener('click', marker.onClick);
        }
      });
    }
  }, [map, markers]);

  // Dibujar rutas
  useEffect(() => {
    if (map && routes.length > 0) {
      routes.forEach((route) => {
        const path = route.path.map((point) => ({ lat: point.lat, lng: point.lng }));

        const polyline = new google.maps.Polyline({
          path,
          geodesic: true,
          strokeColor: route.color,
          strokeOpacity: 1.0,
          strokeWeight: route.weight
        });

        polyline.setMap(map);
      });
    }
  }, [map, routes]);

  return <div ref={ref} style={{ height }} className="w-full rounded-lg" />;
};

const MapComponent: React.FC<MapProps> = (props) => {
  return (
    <Wrapper
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}
      render={render}
    >
      <GoogleMap {...props} />
    </Wrapper>
  );
};

export default MapComponent;
