import React from 'react';
import { useAuthStore } from '../store/authStore';

const ProfilePage: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h1 className="text-3xl font-bold text-gray-900">
            Perfil de {user?.role === 'walker' ? 'Paseador' : user?.role === 'owner' ? 'Dueño' : 'Admin'}
          </h1>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <img 
              src={user?.photoURL || 'https://via.placeholder.com/150'}
              alt="Avatar"
              className="object-cover w-32 h-32 mx-auto rounded-full"
            />
            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                {user?.displayName || 'Nombre Usuario'}
              </h2>
              <p className="text-sm text-gray-500">
                Email: {user?.email}
              </p>
              <p className="mb-4 text-sm text-gray-500">
                {user?.role === 'walker' ? 'Paseador desde ' : user?.role === 'owner' ? 'Dueño desde ' : 'Admin desde '} {user?.createdAt?.toDateString() || 'Fecha no disponible'}
              </p>

              {user?.role === 'walker' && (
                <div>
                  <p className="text-sm text-gray-600">
                    Servicios Ofrecidos:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Paseos individuales</li>
                    <li>Paseos grupales</li>
                    <li>Cuidado especial</li>
                  </ul>
                </div>
              )}

              {user?.role === 'owner' && (
                <div>
                  <p className="text-sm text-gray-600">
                    Mascotas Registradas:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Max</li>
                    <li>Luna</li>
                  </ul>
                </div>
              )}

              {user?.role === 'admin' && (
                <div>
                  <p className="text-sm text-gray-600">
                    Acceso total al sistema
                  </p>
                  <p className="text-sm text-gray-600">
                    Gestione usuarios, paseadores, y dueños
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
