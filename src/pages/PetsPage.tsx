import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, User, Phone, Info } from 'lucide-react';
import type { Pet } from '../types';
import MapComponent from '../components/MapComponent';

const PetsPage: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  // Mock pets data
  const mockPets: Pet[] = [
    {
      id: 'pet-1',
      ownerId: 'owner-1',
      name: 'Max',
      breed: 'Golden Retriever',
      age: 3,
      weight: 28,
      size: 'large',
      specialNeeds: 'Necesita medicación para la cadera a las 2 PM',
      photos: ['https://images.unsplash.com/photo-1552053831-71594a27632d?w=300'],
      vaccinated: true,
      temperament: 'Amigable y juguetón, le encanta correr y jugar fetch',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'pet-2',
      ownerId: 'owner-2',
      name: 'Luna',
      breed: 'Border Collie',
      age: 2,
      weight: 18,
      size: 'medium',
      specialNeeds: 'Muy activa, necesita al menos 1 hora de ejercicio intenso',
      photos: ['https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300'],
      vaccinated: true,
      temperament: 'Inteligente y energética, perfecta para entrenamientos',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'pet-3',
      ownerId: 'owner-3',
      name: 'Bella',
      breed: 'French Bulldog',
      age: 4,
      weight: 12,
      size: 'small',
      specialNeeds: 'Problemas respiratorios, paseos cortos y suaves',
      photos: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300'],
      vaccinated: true,
      temperament: 'Tranquila y cariñosa, le gusta socializar con otros perros',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'pet-4',
      ownerId: 'owner-4',
      name: 'Rocky',
      breed: 'German Shepherd',
      age: 5,
      weight: 35,
      size: 'large',
      specialNeeds: 'Entrenamiento en obediencia, puede ser territorial con otros perros',
      photos: ['https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300'],
      vaccinated: true,
      temperament: 'Leal y protector, necesita un paseador con experiencia',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'pet-5',
      ownerId: 'owner-5',
      name: 'Coco',
      breed: 'Labrador Mix',
      age: 1,
      weight: 15,
      size: 'medium',
      specialNeeds: 'Cachorro en entrenamiento, necesita socialización',
      photos: ['https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300'],
      vaccinated: true,
      temperament: 'Juguetón y curioso, está aprendiendo comandos básicos',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'pet-6',
      ownerId: 'owner-6',
      name: 'Mia',
      breed: 'Poodle',
      age: 6,
      weight: 8,
      size: 'small',
      photos: ['https://images.unsplash.com/photo-1616190264687-b7ebf7aa2eb9?w=300'],
      vaccinated: true,
      temperament: 'Elegante y bien educada, disfruta de paseos tranquilos',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  // Mock owners data for location
  const mockOwnerLocations = {
    'owner-1': { lat: 40.416775, lng: -3.703790, name: 'Ana García', address: 'Madrid Centro' },
    'owner-2': { lat: 40.425775, lng: -3.708790, name: 'Luis Pérez', address: 'Salamanca' },
    'owner-3': { lat: 40.412775, lng: -3.701790, name: 'Carmen Ruiz', address: 'Retiro' },
    'owner-4': { lat: 40.420775, lng: -3.695790, name: 'Javier López', address: 'Chamberí' },
    'owner-5': { lat: 40.408775, lng: -3.710790, name: 'Sofia Martín', address: 'Malasaña' },
    'owner-6': { lat: 40.430775, lng: -3.685790, name: 'Miguel Sánchez', address: 'Las Ventas' },
  };

  useEffect(() => {
    setPets(mockPets);
  }, []);

  const getSizeColor = (size: string) => {
    switch (size) {
      case 'small': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'large': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSizeText = (size: string) => {
    switch (size) {
      case 'small': return 'Pequeño';
      case 'medium': return 'Mediano';
      case 'large': return 'Grande';
      default: return size;
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8">Mascotas Disponibles para Paseo</h2>
      
      {/* Mapa con ubicaciones de mascotas */}
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-primary-600" />
            Ubicación de Mascotas
          </h3>
        </div>
        <div className="h-96">
          <MapComponent
            center={{ lat: 40.416775, lng: -3.703790 }}
            zoom={13}
            markers={pets.map(pet => {
              const ownerLocation = mockOwnerLocations[pet.ownerId as keyof typeof mockOwnerLocations];
              return {
                id: pet.id,
                position: { lat: ownerLocation.lat, lng: ownerLocation.lng },
                title: `${pet.name} - ${ownerLocation.name}`,
                onClick: () => setSelectedPet(pet)
              };
            })}
            height="100%"
          />
        </div>
      </div>

      {/* Lista de mascotas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => {
          const ownerLocation = mockOwnerLocations[pet.ownerId as keyof typeof mockOwnerLocations];
          
          return (
            <div 
              key={pet.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer ${
                selectedPet?.id === pet.id ? 'ring-2 ring-primary-500' : ''
              }`}
              onClick={() => setSelectedPet(pet)}
            >
              <img 
                src={pet.photos[0]} 
                alt={pet.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getSizeColor(pet.size)}`}>
                    {getSizeText(pet.size)}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-2">{pet.breed}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pet.age} años
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{pet.weight} kg</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  {ownerLocation.name}
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {ownerLocation.address}
                </div>
                
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">{pet.temperament}</p>
                
                {pet.specialNeeds && (
                  <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-start">
                      <Info className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-orange-800">{pet.specialNeeds}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    {pet.vaccinated && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Vacunado
                      </span>
                    )}
                  </div>
                  <button className="btn-primary">
                    <Phone className="h-4 w-4 mr-1" />
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetsPage;
