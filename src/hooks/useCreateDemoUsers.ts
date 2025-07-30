import { useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

export const useCreateDemoUsers = () => {
  const createDemoUser = async (email: string, password: string, userData: any) => {
    try {
      // Verificar si el usuario ya existe
      const userDocRef = doc(db, 'demo-users', email);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        console.log(`Usuario demo ${email} ya existe`);
        return;
      }

      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Actualizar perfil
      await updateProfile(userCredential.user, {
        displayName: userData.displayName
      });

      // Guardar datos en Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Marcar como usuario demo creado
      await setDoc(doc(db, 'demo-users', email), { created: true });

      console.log(`Usuario demo ${email} creado exitosamente`);
    } catch (error: any) {
      if (error.code !== 'auth/email-already-in-use') {
        console.error(`Error creando usuario demo ${email}:`, error);
      }
    }
  };

  const createDemoUsers = async () => {
    // Usuario Dueño
    await createDemoUser('dueno@paseoseguro.com', 'password123', {
      email: 'dueno@paseoseguro.com',
      displayName: 'Ana García',
      phoneNumber: '+1234567890',
      role: 'owner',
      address: 'Calle Principal 123, Madrid',
      verified: true
    });

    // Usuario Paseador
    await createDemoUser('paseador@paseoseguro.com', 'password123', {
      email: 'paseador@paseoseguro.com',
      displayName: 'Carlos González',
      phoneNumber: '+1234567891',
      role: 'walker',
      address: 'Avenida Central 456, Madrid',
      verified: true,
      // Datos específicos del paseador
      bio: 'Paseador profesional con 5 años de experiencia. Amo a los animales y disfruto de largas caminatas por el parque.',
      rating: 4.9,
      totalReviews: 127,
      pricePerHour: 15,
      experience: '5 años de experiencia',
      services: ['Paseos individuales', 'Paseos grupales', 'Cuidado básico'],
      availability: [
        { day: 'monday', startTime: '09:00', endTime: '18:00', available: true },
        { day: 'tuesday', startTime: '09:00', endTime: '18:00', available: true },
        { day: 'wednesday', startTime: '09:00', endTime: '18:00', available: true },
        { day: 'thursday', startTime: '09:00', endTime: '18:00', available: true },
        { day: 'friday', startTime: '09:00', endTime: '18:00', available: true },
        { day: 'saturday', startTime: '10:00', endTime: '16:00', available: true },
        { day: 'sunday', startTime: '10:00', endTime: '16:00', available: false },
      ],
      location: {
        lat: 40.4168,
        lng: -3.7038,
        address: 'Madrid, España',
        city: 'Madrid',
        state: 'Madrid',
        zipCode: '28001'
      }
    });

    // Crear más paseadores de ejemplo
    const walkers = [
      {
        email: 'maria@paseoseguro.com',
        displayName: 'María López',
        bio: 'Especialista en razas pequeñas con certificación en primeros auxilios caninos.',
        rating: 4.7,
        pricePerHour: 12
      },
      {
        email: 'pedro@paseoseguro.com',
        displayName: 'Pedro Martínez',
        bio: 'Entrenador canino con experiencia en perros grandes y enérgicos.',
        rating: 4.8,
        pricePerHour: 18
      },
      {
        email: 'lucia@paseoseguro.com',
        displayName: 'Lucía Fernández',
        bio: 'Veterinaria que ofrece servicios de paseo con cuidado médico básico.',
        rating: 5.0,
        pricePerHour: 20
      }
    ];

    for (const walker of walkers) {
      await createDemoUser(walker.email, 'password123', {
        email: walker.email,
        displayName: walker.displayName,
        phoneNumber: '+1234567892',
        role: 'walker',
        address: 'Madrid, España',
        verified: true,
        bio: walker.bio,
        rating: walker.rating,
        totalReviews: Math.floor(Math.random() * 100) + 20,
        pricePerHour: walker.pricePerHour,
        experience: `${Math.floor(Math.random() * 5) + 2} años de experiencia`,
        services: ['Paseos individuales', 'Paseos grupales', 'Cuidado básico'],
        availability: [
          { day: 'monday', startTime: '09:00', endTime: '18:00', available: true },
          { day: 'tuesday', startTime: '09:00', endTime: '18:00', available: true },
          { day: 'wednesday', startTime: '09:00', endTime: '18:00', available: true },
          { day: 'thursday', startTime: '09:00', endTime: '18:00', available: true },
          { day: 'friday', startTime: '09:00', endTime: '18:00', available: true },
          { day: 'saturday', startTime: '10:00', endTime: '16:00', available: true },
          { day: 'sunday', startTime: '10:00', endTime: '16:00', available: Math.random() > 0.5 },
        ],
        location: {
          lat: 40.4168 + (Math.random() - 0.5) * 0.1,
          lng: -3.7038 + (Math.random() - 0.5) * 0.1,
          address: 'Madrid, España',
          city: 'Madrid',
          state: 'Madrid',
          zipCode: '28001'
        }
      });
    }
  };

  useEffect(() => {
    // Solo crear usuarios demo en desarrollo
    if (import.meta.env.DEV) {
      createDemoUsers();
    }
  }, []);

  return { createDemoUsers };
};

export default useCreateDemoUsers;
