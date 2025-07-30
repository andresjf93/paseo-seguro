import React, { useState } from 'react';
import { Calendar, MapPin, Clock, User, Star } from 'lucide-react';
import MapComponent from '../components/maps/MapComponent';
import type { MapMarker, MapRoute } from '../types';

const MyBookingsPage: React.FC = () => {
  // Datos de ejemplo de reservas
  const [bookings] = useState([
    {
      id: '1',
      walkerName: 'Carlos González',
      walkerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: '2025-01-31',
      time: '10:00 AM',
      duration: '60 min',
      status: 'completed',
      rating: 4.9,
      route: {
        start: { lat: 40.7128, lng: -74.0060 },
        end: { lat: 40.7148, lng: -74.0070 },
        waypoints: [
          { lat: 40.7138, lng: -74.0065 },
          { lat: 40.7143, lng: -74.0068 }
        ]
      }
    },
    {
      id: '2',
      walkerName: 'María López',
      walkerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: '2025-02-02',
      time: '3:00 PM',
      duration: '45 min',
      status: 'upcoming',
      rating: null,
      route: null
    }
  ]);

  const [selectedBooking, setSelectedBooking] = useState(bookings[0]);

  // Configurar marcadores y rutas para el mapa
  const mapMarkers: MapMarker[] = selectedBooking.route ? [
    {
      id: 'start',
      position: selectedBooking.route.start,
      title: 'Inicio del paseo',
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      id: 'end',
      position: selectedBooking.route.end,
      title: 'Final del paseo',
      icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }
  ] : [];

  const mapRoutes: MapRoute[] = selectedBooking.route ? [
    {
      id: 'walk-route',
      path: [
        selectedBooking.route.start,
        ...selectedBooking.route.waypoints,
        selectedBooking.route.end
      ],
      color: '#0ea5e9',
      weight: 4
    }
  ] : [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'upcoming':
        return 'Próximo';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Mis Reservas
        </h1>
        <p className="text-gray-600">
          Historial de paseos y seguimiento en tiempo real
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lista de reservas */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className={`card-hover ${
                  selectedBooking.id === booking.id
                    ? 'ring-2 ring-primary-500 bg-primary-50'
                    : ''
                }`}
                onClick={() => setSelectedBooking(booking)}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={booking.walkerAvatar}
                    alt={booking.walkerName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {booking.walkerName}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          getStatusColor(booking.status)
                        }`}
                      >
                        {getStatusText(booking.status)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {booking.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {booking.time}
                      </div>
                    </div>
                    {booking.rating && (
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{booking.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detalles y mapa */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Detalles del Paseo
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  getStatusColor(selectedBooking.status)
                }`}
              >
                {getStatusText(selectedBooking.status)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedBooking.walkerAvatar}
                  alt={selectedBooking.walkerName}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedBooking.walkerName}
                  </h3>
                  {selectedBooking.rating && (
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{selectedBooking.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">Calificación</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{selectedBooking.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{selectedBooking.time} - {selectedBooking.duration}</span>
                </div>
              </div>
            </div>

            {/* Mapa del recorrido */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                Recorrido del Paseo
              </h3>
              {selectedBooking.route ? (
                <MapComponent
                  center={selectedBooking.route.start}
                  zoom={15}
                  markers={mapMarkers}
                  routes={mapRoutes}
                  height="300px"
                />
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">
                      El recorrido estará disponible después del paseo
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Acciones */}
            <div className="flex space-x-3">
              {selectedBooking.status === 'upcoming' && (
                <>
                  <button className="btn-secondary">
                    Reagendar
                  </button>
                  <button className="btn-danger">
                    Cancelar
                  </button>
                </>
              )}
              {selectedBooking.status === 'completed' && !selectedBooking.rating && (
                <button className="btn-primary">
                  Calificar Paseo
                </button>
              )}
              <button className="btn-secondary flex items-center">
                <User className="w-4 h-4 mr-2" />
                Contactar Paseador
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
