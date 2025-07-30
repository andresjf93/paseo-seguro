import React from 'react';
import { useParams } from 'react-router-dom';

const WalkerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="card">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Perfil del Paseador
        </h1>
        <p className="text-gray-600">
          Mostrando detalles del paseador con ID: {id}
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Esta página estará disponible próximamente con información detallada del paseador,
          galería de fotos, reseñas, disponibilidad y opción de reserva.
        </p>
      </div>
    </div>
  );
};

export default WalkerProfilePage;
