import { Link } from 'react-router-dom';
import { Users, CheckCircle } from 'lucide-react';

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Bienvenido a PaseoSeguro
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Conectamos dueños de mascotas con paseadores de confianza.
        </p>
        <div className="flex space-x-4">
          <Link to="/register" className="btn-primary flex items-center">
            <CheckCircle className="inline mr-2" />
            Registrarse como Dueño
          </Link>
          <Link to="/register" className="btn-secondary flex items-center">
            <Users className="inline mr-2" />
            Registrarse como Paseador
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Por qué elegir PaseoSeguro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800">
              <CheckCircle className="inline mr-2 text-primary-600" />
              Seguro y Confiable
            </h3>
            <p className="mt-2 text-gray-600">
              Todos nuestros paseadores son revisados y verificados.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800">
              <Users className="inline mr-2 text-primary-600" />
              Paseadores Capacitados
            </h3>
            <p className="mt-2 text-gray-600">
              Capacitación especializada para brindar el mejor cuidado.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800">
              <CheckCircle className="inline mr-2 text-primary-600" />
              Atención Personalizada
            </h3>
            <p className="mt-2 text-gray-600">
              Servicios adaptados a las necesidades de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

