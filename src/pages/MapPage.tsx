import React from "react";
import MapComponent from "../components/MapComponent";
import { MapPin } from "lucide-react";

const MapPage: React.FC = () => {
  // Mock data for map markers
  const mapMarkers = [
    {
      id: "walker-1",
      position: { lat: 40.416775, lng: -3.70379 },
      title: "Carlos González - Paseador",
    },
    {
      id: "walker-2",
      position: { lat: 40.425775, lng: -3.70879 },
      title: "María López - Paseador",
    },
    {
      id: "walker-3",
      position: { lat: 40.412775, lng: -3.70179 },
      title: "Pedro Martínez - Paseador",
    },
    {
      id: "pet-1",
      position: { lat: 40.420775, lng: -3.69579 },
      title: "Max - Golden Retriever",
    },
    {
      id: "pet-2",
      position: { lat: 40.408775, lng: -3.71079 },
      title: "Luna - Border Collie",
    },
  ];

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h2 className="flex items-center mb-8 text-3xl font-bold">
        <MapPin className="w-8 h-8 mr-3 text-primary-600" />
        Mapa General
      </h2>

      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b">
          <p className="text-gray-600">
            Visualiza la ubicación de paseadores y mascotas en tu área
          </p>
        </div>

        <div className="h-[600px]">
          <MapComponent
            center={{
              lat: 40.416775,
              lng: -3.70379,
              address: "Madrid, España",
              city: "Madrid",
              state: "Madrid",
              zipCode: "28013",
            }}
            zoom={13}
            markers={mapMarkers}
            height="100%"
          />
        </div>

        <div className="p-4 bg-gray-50">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></div>
              <span>Paseadores</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 mr-2 bg-green-500 rounded-full"></div>
              <span>Mascotas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
