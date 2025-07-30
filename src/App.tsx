import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './providers/AuthProvider';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import WalkersPage from './pages/WalkersPage';
import WalkerProfilePage from './pages/WalkerProfilePage';
import BookingPage from './pages/BookingPage';
import MyBookingsPage from './pages/MyBookingsPage';
import ReviewsPage from './pages/ReviewsPage';
import ProfilePage from './pages/ProfilePage';
import PaymentPage from './pages/PaymentPage';
import PetsPage from './pages/PetsPage';
import MapPage from './pages/MapPage';
import AdminPage from './pages/AdminPage';

// Cargar Stripe (usarías tu clave pública aquí)
const stripePromise = loadStripe('pk_test_your_stripe_public_key_here');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Toaster position="top-right" />
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<Layout><HomePage /></Layout>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Rutas protegidas */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Layout><DashboardPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/booking/:walkerId" element={
                <ProtectedRoute>
                  <Layout><BookingPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/my-bookings" element={
                <ProtectedRoute>
                  <Layout><MyBookingsPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/reviews" element={
                <ProtectedRoute>
                  <Layout><ReviewsPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Layout><ProfilePage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/payment" element={
                <ProtectedRoute>
                  <Layout><PaymentPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/pets" element={
                <ProtectedRoute>
                  <Layout><PetsPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/map" element={
                <ProtectedRoute>
                  <Layout><MapPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Layout><AdminPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/walkers" element={
                <ProtectedRoute>
                  <Layout><WalkersPage /></Layout>
                </ProtectedRoute>
              } />
              <Route path="/walker/:id" element={
                <ProtectedRoute>
                  <Layout><WalkerProfilePage /></Layout>
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </Elements>
  );
}

export default App;
