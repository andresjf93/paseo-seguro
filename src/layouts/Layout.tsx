import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Calendar, 
  BarChart3, 
  User, 
  LogOut,
  MapPin,
  Star,
  Heart,
  Settings
} from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';
import DevToolbar from '../components/dev/DevToolbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      logout();
      toast.success('Sesión cerrada exitosamente');
      navigate('/');
    } catch (error) {
      toast.error('Error al cerrar sesión');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <MapPin className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  PaseoSeguro
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Public Navigation */}
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Home className="h-4 w-4 mr-1" />
                Inicio
              </Link>

              {isAuthenticated ? (
                <>
                  {/* Role-based Navigation */}
                  {user?.role === 'owner' && (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Dashboard
                      </Link>
                      
                      <Link 
                        to="/walkers" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Users className="h-4 w-4 mr-1" />
                        Paseadores
                      </Link>
                      
                      <Link 
                        to="/my-bookings" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Mis Reservas
                      </Link>

                      <Link 
                        to="/map" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <MapPin className="h-4 w-4 mr-1" />
                        Mapa
                      </Link>
                    </>
                  )}

                  {user?.role === 'walker' && (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Dashboard
                      </Link>
                      
                      <Link 
                        to="/pets" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        Mascotas
                      </Link>
                      
                      <Link 
                        to="/my-bookings" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Mis Paseos
                      </Link>

                      <Link 
                        to="/map" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <MapPin className="h-4 w-4 mr-1" />
                        Mapa
                      </Link>

                      <Link 
                        to="/reviews" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Star className="h-4 w-4 mr-1" />
                        Reseñas
                      </Link>
                    </>
                  )}

                  {user?.role === 'admin' && (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Dashboard
                      </Link>
                      
                      <Link 
                        to="/walkers" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Users className="h-4 w-4 mr-1" />
                        Paseadores
                      </Link>
                      
                      <Link 
                        to="/pets" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        Mascotas
                      </Link>
                      
                      <Link 
                        to="/my-bookings" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Todas las Reservas
                      </Link>

                      <Link 
                        to="/map" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <MapPin className="h-4 w-4 mr-1" />
                        Mapa
                      </Link>

                      <Link 
                        to="/reviews" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Star className="h-4 w-4 mr-1" />
                        Reseñas
                      </Link>

                      <Link 
                        to="/admin" 
                        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <Settings className="h-4 w-4 mr-1" />
                        Admin
                      </Link>
                    </>
                  )}

                  {/* User Dropdown */}
                  <div className="relative group">
                    <button className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      <User className="h-4 w-4 mr-1" />
                      {user?.displayName || 'Usuario'}
                    </button>
                    
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mi Perfil
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 inline mr-2" />
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Guest Navigation */}
                  <Link 
                    to="/login" 
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn-primary"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center">
                <MapPin className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">PaseoSeguro</span>
              </div>
              <p className="mt-4 text-gray-300">
                Conectamos dueños de mascotas con paseadores profesionales para 
                brindar el mejor cuidado y ejercicio a tus compañeros peludos.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Servicios
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/walkers" className="text-base text-gray-300 hover:text-white">
                    Encontrar Paseadores
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Ser Paseador
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Soporte
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-center text-xs text-gray-400">
              &copy; 2025 PaseoSeguro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      <DevToolbar />
    </div>
  );
};

export default Layout;
