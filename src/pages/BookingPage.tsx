import React from 'react';
import { useParams } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const { walkerId } = useParams<{ walkerId: string }>();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="card">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Reservar Paseo
        </h1>
        <p className="text-gray-600">
          Reservando con paseador ID: {walkerId}
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Aquí podrás seleccionar fecha, hora, duración del paseo y realizar el pago.
        </p>
      </div>
    </div>
  );
};

export default BookingPage;
