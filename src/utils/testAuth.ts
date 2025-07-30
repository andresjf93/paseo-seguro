import { useAuthStore } from '../store/authStore';
import type { User } from '../types';

// Usuarios de prueba predefinidos
export const TEST_USERS = {
  owner: {
    id: 'owner-test-123',
    email: 'dueno@paseoseguro.com',
    displayName: 'Ana García',
    phoneNumber: '+1234567890',
    address: 'Calle Principal 123, Madrid',
    role: 'owner' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  walker: {
    id: 'walker-test-123',
    email: 'paseador@paseoseguro.com',
    displayName: 'Carlos González',
    phoneNumber: '+1234567891',
    address: 'Avenida Central 456, Madrid',
    role: 'walker' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  admin: {
    id: 'admin-test-123',
    email: 'admin@paseoseguro.com',
    displayName: 'Admin Usuario',
    phoneNumber: '+1234567892',
    address: 'Oficina Central, Madrid',
    role: 'admin' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
} as const;

// Hook para funciones de prueba
export const useTestAuth = () => {
  const { setUser, logout } = useAuthStore();

  const loginAsOwner = () => {
    setUser(TEST_USERS.owner);
    console.log('✅ Logueado como Dueño:', TEST_USERS.owner.displayName);
  };

  const loginAsWalker = () => {
    setUser(TEST_USERS.walker);
    console.log('✅ Logueado como Paseador:', TEST_USERS.walker.displayName);
  };

  const loginAsAdmin = () => {
    setUser(TEST_USERS.admin);
    console.log('✅ Logueado como Admin:', TEST_USERS.admin.displayName);
  };

  const logoutUser = () => {
    logout();
    console.log('✅ Usuario deslogueado');
  };

  return {
    loginAsOwner,
    loginAsWalker,
    loginAsAdmin,
    logoutUser,
    testUsers: TEST_USERS
  };
};

// Funciones globales para usar en la consola del navegador
export const setTestUser = (role: 'owner' | 'walker' | 'admin') => {
  const { setUser } = useAuthStore.getState();
  const user = TEST_USERS[role];
  setUser(user);
  console.log(`✅ Logueado como ${role}:`, user.displayName);
  return user;
};

export const logoutTestUser = () => {
  const { logout } = useAuthStore.getState();
  logout();
  console.log('✅ Usuario deslogueado');
};

// Exponer funciones globalmente para uso en consola
if (typeof window !== 'undefined') {
  (window as any).setTestUser = setTestUser;
  (window as any).logoutTestUser = logoutTestUser;
  (window as any).TEST_USERS = TEST_USERS;
}
