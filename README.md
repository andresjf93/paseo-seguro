# 🐕 PaseoSeguro

**PaseoSeguro** es una plataforma web moderna que conecta dueños de mascotas con paseadores profesionales de confianza. Construida con React, TypeScript, Tailwind CSS y Firebase.

![PaseoSeguro](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=PaseoSeguro)

## ✨ Características

### 🔐 **Autenticación Segura**
- Registro e inicio de sesión con Firebase Auth
- Recuperación de contraseña por email
- Roles diferenciados (Dueño/Paseador)
- Rutas protegidas por autenticación

### 👥 **Para Dueños de Mascotas**
- Dashboard personalizado con estadísticas
- Búsqueda y filtrado de paseadores
- Historial completo de paseos
- Sistema de reseñas y calificaciones
- Seguimiento en tiempo real con mapas

### 🚶 **Para Paseadores**
- Perfil profesional verificado
- Gestión de disponibilidad
- Historial de servicios
- Recepción de pagos seguros

### 🗺️ **Integración con Mapas**
- Visualización de rutas de paseo
- Seguimiento GPS en tiempo real
- Historial de recorridos

### 💳 **Pagos Seguros**
- Integración con Stripe
- Planes de suscripción flexibles
- Pagos por servicio

## 🛠️ Tecnologías

- ⚛️ **React 18** + **TypeScript**
- ⚡ **Vite** (Build tool)
- 🎨 **Tailwind CSS 3.4**
- 🔥 **Firebase** (Auth + Firestore)
- 💳 **Stripe** (Pagos)
- 🗺️ **Google Maps API**
- 🐻 **Zustand** (Estado global)
- 🧭 **React Router** (Navegación)
- 🎯 **Lucide React** (Iconos)

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/paseo-seguro.git
   cd paseo-seguro
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   
   Edita `.env` con tus credenciales:
   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=tu_proyecto
   VITE_STRIPE_PUBLIC_KEY=pk_test_...
   ```

4. **Iniciar la aplicación**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 👤 Usuarios de Prueba

### 🏠 **Dueño de Mascota**
- **Email:** `dueno@paseoseguro.com`
- **Contraseña:** `password123`
- **Rol:** Owner

### 🚶 **Paseador**
- **Email:** `paseador@paseoseguro.com`
- **Contraseña:** `password123`
- **Rol:** Walker

## 📁 Estructura del Proyecto

```
/src
 ┣ /components        → Componentes reutilizables UI
 ┣ /pages             → Páginas principales
 ┣ /layouts           → Layouts de la aplicación
 ┣ /services          → APIs (Firebase, Stripe, Maps)
 ┣ /store             → Estado global (Zustand)
 ┣ /hooks             → Hooks personalizados
 ┣ /types             → Definiciones TypeScript
 ┣ /utils             → Funciones auxiliares
 ┗ /providers         → Proveedores de contexto
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de la build
npm run lint     # Linting con ESLint
```

## 🌟 Funcionalidades Implementadas

- ✅ Sistema de autenticación completo
- ✅ Dashboard para usuarios
- ✅ Gestión de perfiles
- ✅ Visualización de paseadores
- ✅ Integración con mapas
- ✅ Sistema de reseñas
- ✅ Rutas protegidas
- ✅ Diseño responsive
- ✅ Temas personalizables

## 🚧 Próximas Funcionalidades

- 📱 Notificaciones push
- 📊 Analytics avanzado
- 🔄 Sincronización offline
- 📸 Galería de fotos de paseos
- 💬 Chat en tiempo real
- 📍 Geofencing para zonas seguras

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Desarrollado por

**Andre** - Desarrollador Full Stack

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!
