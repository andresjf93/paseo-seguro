import React from 'react';
import { useTestAuth } from '../../utils/testAuth';
import { useAuthStore } from '../../store/authStore';

export const DevToolbar: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();
  const { loginAsOwner, loginAsWalker, loginAsAdmin, logoutUser } = useTestAuth();

  // Solo mostrar en desarrollo
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 min-w-[280px]">
      <div className="text-sm font-semibold mb-3 text-gray-300">
        🛠️ Dev Toolbar
      </div>
      
      <div className="mb-3">
        <div className="text-xs text-gray-400 mb-1">Estado actual:</div>
        {isAuthenticated && user ? (
          <div className="text-xs">
            <span className="text-green-400">✅ Logueado</span>
            <br />
            <span className="text-gray-300">{user.displayName}</span>
            <br />
            <span className="text-blue-400">Rol: {user.role}</span>
          </div>
        ) : (
          <span className="text-red-400 text-xs">❌ No logueado</span>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-xs text-gray-400 mb-2">Login rápido:</div>
        
        <button
          onClick={loginAsOwner}
          className="w-full px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded text-xs font-medium transition-colors"
        >
          👤 Login como Dueño
        </button>
        
        <button
          onClick={loginAsWalker}
          className="w-full px-3 py-1.5 bg-green-600 hover:bg-green-700 rounded text-xs font-medium transition-colors"
        >
          🚶 Login como Paseador
        </button>
        
        <button
          onClick={loginAsAdmin}
          className="w-full px-3 py-1.5 bg-purple-600 hover:bg-purple-700 rounded text-xs font-medium transition-colors"
        >
          🔧 Login como Admin
        </button>
        
        <button
          onClick={logoutUser}
          className="w-full px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded text-xs font-medium transition-colors"
        >
          🚪 Logout
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-400">
        También puedes usar en consola:
        <br />
        <code className="text-yellow-400">setTestUser('owner')</code>
        <br />
        <code className="text-yellow-400">setTestUser('walker')</code>
        <br />
        <code className="text-yellow-400">logoutTestUser()</code>
      </div>
    </div>
  );
};

export default DevToolbar;
