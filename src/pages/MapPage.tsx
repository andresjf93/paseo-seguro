import React from 'react';
import MapComponent from '../components/MapComponent';
import { MapPin } from 'lucide-react';

const MapPage: React.FC = () => {
  // Mock data for map markers
  const mapMarkers = [
    {
      id: 'walker-1',
      position: { lat: 40.416775, lng: -3.703790 },
      title: 'Carlos González - Paseador',
    },
    {
      id: 'walker-2',
      position: { lat: 40.425775, lng: -3.708790 },
      title: 'María López - Paseador',
    },
    {
      id: 'walker-3',
      position: { lat: 40.412775, lng: -3.701790 },
      title: 'Pedro Martínez - Paseador',
    },
    {
      id: 'pet-1',
      position: { lat: 40.420775, lng: -3.695790 },
      title: 'Max - Golden Retriever',
    },
    {
      id: 'pet-2',
      position: { lat: 40.408775, lng: -3.710790 },
      title: 'Luna - Border Collie',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <MapPin className="h-8 w-8 mr-3 text-primary-600" />
        Mapa General
      </h2>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b">
          <p className="text-gray-600">
            Visualiza la ubicación de paseadores y mascotas en tu área
          </p>
        </div>
        
        <div className="h-[600px]">
          <MapComponent
            center={{ lat: 40.416775, lng: -3.703790 }}
            zoom={13}
            markers={mapMarkers}
            height="100%"
          />
        </div>
        
        <div className="p-4 bg-gray-50">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span>Paseadores</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span>Mascotas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
