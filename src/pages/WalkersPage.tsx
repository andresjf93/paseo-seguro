import React from 'react';
import { useState, useEffect } from 'react';
//import { collection, getDocs, query, where } from 'firebase/firestore';
//import { db } from '../services/firebase';
import type { Walker } from '../types';
import MapComponent from '../components/MapComponent';
import { Star, MapPin, Phone, Euro } from 'lucide-react';

const WalkersPage: React.FC = () => {
  const [walkers, setWalkers] = useState<Walker[]>([]);
  const [selectedWalker, setSelectedWalker] = useState<Walker | null>(null);

  // Mock walkers data
  const mockWalkers: Walker[] = [
    {
      id: 'walker-1',
      userId: 'user-1',
      name: 'Carlos González',
      bio: 'Paseador profesional con 5 años de experiencia. Especializado en perros grandes y entrenamiento básico.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 4.9,
      totalReviews: 127,
      pricePerHour: 15,
      experience: '5 años de experiencia',
      services: ['Paseos individuales', 'Paseos grupales', 'Entrenamiento básico'],
      availability: [],
      location: {
        lat: 40.416775,
        lng: -3.703790,
        address: 'Madrid Centro, España',
        city: 'Madrid',
        state: 'Madrid',
        zipCode: '28001'
      },
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'walker-2',
      userId: 'user-2',
      name: 'María López',
      bio: 'Especialista en razas pequeñas con certificación en primeros auxilios caninos. Amante de los animales.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=150',
      rating: 4.7,
      totalReviews: 89,
      pricePerHour: 12,
      experience: '3 años de experiencia',
      services: ['Paseos individuales', 'Cuidado especial', 'Medicación'],
      availability: [],
      location: {
        lat: 40.425775,
        lng: -3.708790,
        address: 'Salamanca, Madrid',
        city: 'Madrid',
        state: 'Madrid',
        zipCode: '28006'
      },
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'walker-3',
      userId: 'user-3',
      name: 'Pedro Martínez',
      bio: 'Entrenador canino profesional. Experiencia con perros de todas las edades y comportamientos.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 4.8,
      totalReviews: 156,
      pricePerHour: 18,
      experience: '7 años de experiencia',
      services: ['Paseos individuales', 'Entrenamiento avanzado', 'Socialización'],
      availability: [],
      location: {
        lat: 40.412775,
        lng: -3.701790,
        address: 'Retiro, Madrid',
        city: 'Madrid',
        state: 'Madrid',
        zipCode: '28009'
      },
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'walker-4',
      userId: 'user-4',
      name: 'Lucía Fernández',
      bio: 'Veterinaria que ofrece servicios de paseo con cuidado médico básico y atención especializada.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5.0,
      totalReviews: 203,
      pricePerHour: 20,
      experience: '8 años de experiencia',
      services: ['Paseos terapéuticos', 'Cuidado médico', 'Rehabilitación'],
      availability: [],
      location: {
        lat: 40.420775,
        lng: -3.695790,
        address: 'Chamberí, Madrid',
        city: 'Madrid',
        state: 'Madrid',
        zipCode: '28010'
      },
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'walker-5',
      userId: 'user-5',
      name: 'Ana Ruiz',
      bio: 'Paseadora joven y enérgica. Perfecta para perros activos que necesitan mucho ejercicio y juego.',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150',
      rating: 4.6,
      totalReviews: 67,
      pricePerHour: 14,
      experience: '2 años de experiencia',
      services: ['Paseos activos', 'Juegos en parque', 'Ejercicio intensivo'],
      availability: [],
      location: {
        lat: 40.408775,
        lng: -3.710790,
        address: 'Malasaña, Madrid',
        city: 'Madrid',
        state: 'Madrid',
        zipCode: '28004'
      },
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  useEffect(() => {
    // Use mock data instead of Firebase for now
    setWalkers(mockWalkers);
  }, []);

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold">Paseadores Disponibles</h2>
      
      {/* Mapa con paseadores */}
      <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b">
          <h3 className="flex items-center text-lg font-semibold">
            <MapPin className="w-5 h-5 mr-2 text-primary-600" />
            Ubicación de Paseadores
          </h3>
        </div>
        <div className="h-96">
          <MapComponent
            center={{ lat: 40.416775, lng: -3.703790 }}
            zoom={13}
            markers={walkers.map(walker => ({
              id: walker.id,
              position: walker.location,
              title: walker.name,
              onClick: () => setSelectedWalker(walker)
            }))}
            height="100%"
          />
        </div>
      </div>

      {/* Lista de paseadores */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {walkers.map((walker) => (
          <div 
            key={walker.id} 
            className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer ${
              selectedWalker?.id === walker.id ? 'ring-2 ring-primary-500' : ''
            }`}
            onClick={() => setSelectedWalker(walker)}
          >
            <img 
              src={walker.avatar} 
              alt={walker.name} 
              className="object-cover w-full h-48" 
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{walker.name}</h3>
                {walker.verified && (
                  <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">
                    Verificado
                  </span>
                )}
              </div>
              
              <p className="mb-4 text-sm text-gray-600 line-clamp-2">{walker.bio}</p>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(walker.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {walker.rating} ({walker.totalReviews} reseñas)
                </span>
              </div>
              
              <div className="flex items-center mb-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {walker.location.address}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-lg font-bold text-primary-600">
                  <Euro className="w-5 h-5 mr-1" />
                  {walker.pricePerHour}/hora
                </div>
                <button className="btn-primary">
                  <Phone className="w-4 h-4 mr-1" />
                  Contactar
                </button>
              </div>
              
              <div className="pt-4 mt-4 border-t">
                <p className="mb-2 text-xs text-gray-500">Servicios:</p>
                <div className="flex flex-wrap gap-1">
                  {walker.services.slice(0, 2).map((service, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded"
                    >
                      {service}
                    </span>
                  ))}
                  {walker.services.length > 2 && (
                    <span className="text-xs text-gray-500">+{walker.services.length - 2} más</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalkersPage;

