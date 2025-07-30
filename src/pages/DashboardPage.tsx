import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Calendar, Users, Star, CreditCard } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();

  const stats = [
    {
      name: 'Paseos Completados',
      value: '12',
      icon: Calendar,
      color: 'text-primary-600'
    },
    {
      name: 'Paseadores Favoritos',
      value: '3',
      icon: Users,
      color: 'text-green-600'
    },
    {
      name: 'Calificación Promedio',
      value: '4.8',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      name: 'Gasto Total',
      value: '$240',
      icon: CreditCard,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          ¡Bienvenido, {user?.displayName}!
        </h1>
        <p className="mt-2 text-gray-600">
          Aquí tienes un resumen de tu actividad en PaseoSeguro
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Próximos Paseos
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">Carlos González</p>
                <p className="text-sm text-gray-600">Mañana a las 10:00 AM</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Confirmado
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">María López</p>
                <p className="text-sm text-gray-600">Viernes a las 3:00 PM</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Pendiente
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Paseadores Recientes
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex-1">
                <p className="font-semibold">Carlos González</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">4.9</span>
                </div>
              </div>
              <button className="btn-secondary text-sm">
                Contactar
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="flex-1">
                <p className="font-semibold">María López</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">4.7</span>
                </div>
              </div>
              <button className="btn-secondary text-sm">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
