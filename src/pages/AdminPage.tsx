import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Calendar, 
  Star, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Settings,
  BarChart3
} from 'lucide-react';

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'bookings' | 'reports'>('overview');

  const stats = {
    totalUsers: 247,
    totalWalkers: 32,
    totalPets: 156,
    totalBookings: 1023,
    activeBookings: 45,
    completedBookings: 934,
    cancelledBookings: 44,
    totalRevenue: 15420,
    monthlyRevenue: 2830,
    averageRating: 4.7,
    totalReviews: 892
  };

  const recentUsers = [
    { id: 1, name: 'Ana García', email: 'ana@example.com', role: 'owner', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Carlos González', email: 'carlos@example.com', role: 'walker', status: 'pending', joinDate: '2024-01-14' },
    { id: 3, name: 'María López', email: 'maria@example.com', role: 'walker', status: 'active', joinDate: '2024-01-13' },
    { id: 4, name: 'Luis Pérez', email: 'luis@example.com', role: 'owner', status: 'active', joinDate: '2024-01-12' }
  ];

  const recentBookings = [
    { id: 1, walker: 'Carlos González', owner: 'Ana García', pet: 'Max', date: '2024-01-15', status: 'completed', amount: 25 },
    { id: 2, walker: 'María López', owner: 'Luis Pérez', pet: 'Luna', date: '2024-01-15', status: 'in_progress', amount: 18 },
    { id: 3, walker: 'Pedro Martínez', owner: 'Carmen Ruiz', pet: 'Rocky', date: '2024-01-14', status: 'confirmed', amount: 30 },
    { id: 4, walker: 'Lucía Fernández', owner: 'Javier López', pet: 'Bella', date: '2024-01-14', status: 'cancelled', amount: 22 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
      case 'in_progress':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'pending': return 'Pendiente';
      case 'completed': return 'Completado';
      case 'in_progress': return 'En Progreso';
      case 'confirmed': return 'Confirmado';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-8">
        <h2 className="flex items-center text-3xl font-bold">
          <Settings className="w-8 h-8 mr-3 text-primary-600" />
          Panel de Administración
        </h2>
        <p className="mt-2 text-gray-600">Gestiona usuarios, reservas y estadísticas de la plataforma</p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Resumen', icon: BarChart3 },
            { id: 'users', label: 'Usuarios', icon: Users },
            { id: 'bookings', label: 'Reservas', icon: Calendar },
            { id: 'reports', label: 'Reportes', icon: TrendingUp }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-4 py-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total Usuarios</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.totalUsers}</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total Reservas</p>
                  <p className="text-2xl font-bold text-green-600">{stats.totalBookings}</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Ingresos Totales</p>
                  <p className="text-2xl font-bold text-purple-600">€{stats.totalRevenue}</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
                <Star className="w-8 h-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Calificación Media</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.averageRating}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Usuarios Recientes */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">Usuarios Recientes</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentUsers.map(user => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                          <Users className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.role === 'walker' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.role === 'walker' ? 'Paseador' : 'Dueño'}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          {getStatusIcon(user.status)}
                          <span>{getStatusText(user.status)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reservas Recientes */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">Reservas Recientes</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentBookings.map(booking => (
                    <div key={booking.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{booking.pet}</p>
                          <p className="text-sm text-gray-600">{booking.walker} → {booking.owner}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">€{booking.amount}</span>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          {getStatusIcon(booking.status)}
                          <span>{getStatusText(booking.status)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other tabs content */}
      {activeTab !== 'overview' && (
        <div className="p-8 text-center bg-white rounded-lg shadow-lg">
          <div className="mb-4 text-gray-400">
            <Settings className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            {activeTab === 'users' && 'Gestión de Usuarios'}
            {activeTab === 'bookings' && 'Gestión de Reservas'}
            {activeTab === 'reports' && 'Reportes y Análisis'}
          </h3>
          <p className="text-gray-600">
            Esta sección está en desarrollo. Aquí podrás gestionar{' '}
            {activeTab === 'users' && 'usuarios, paseadores y verificaciones'}
            {activeTab === 'bookings' && 'reservas, pagos y disputas'}
            {activeTab === 'reports' && 'reportes detallados y métricas'}.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
