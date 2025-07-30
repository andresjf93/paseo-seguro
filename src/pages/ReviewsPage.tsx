import React, { useState, useEffect } from 'react';
import { Star, User, Calendar, Heart, MessageCircle } from 'lucide-react';
import type { Review } from '../types';

const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState<'all' | 1 | 2 | 3 | 4 | 5>('all');

  // Mock reviews data
  const mockReviews: Review[] = [
    {
      id: 'review-1',
      bookingId: 'booking-1',
      reviewerId: 'owner-1',
      revieweeId: 'walker-1',
      rating: 5,
      comment: 'Carlos fue excepcional con Max. Muy profesional, puntual y se nota que realmente ama a los perros. Max llegó feliz y cansado después del paseo. ¡Definitivamente lo recomiendo!',
      photos: ['https://images.unsplash.com/photo-1552053831-71594a27632d?w=150'],
      createdAt: new Date(2024, 0, 15),
      updatedAt: new Date(2024, 0, 15),
    },
    {
      id: 'review-2',
      bookingId: 'booking-2',
      reviewerId: 'owner-2',
      revieweeId: 'walker-2',
      rating: 4,
      comment: 'María es muy cariñosa con Luna. Siempre envía fotos durante el paseo y sigue las instrucciones al pie de la letra. Solo una pequeña observación: llegó 10 minutos tarde, pero avisó con anticipación.',
      createdAt: new Date(2024, 0, 12),
      updatedAt: new Date(2024, 0, 12),
    },
    {
      id: 'review-3',
      bookingId: 'booking-3',
      reviewerId: 'owner-3',
      revieweeId: 'walker-3',
      rating: 5,
      comment: 'Pedro demostró una gran experiencia con Rocky. Sabía exactamente cómo manejar su personalidad fuerte y logró que siguiera las órdenes básicas. Excelente trabajo de entrenamiento durante el paseo.',
      createdAt: new Date(2024, 0, 10),
      updatedAt: new Date(2024, 0, 10),
    },
    {
      id: 'review-4',
      bookingId: 'booking-4',
      reviewerId: 'owner-4',
      revieweeId: 'walker-4',
      rating: 5,
      comment: 'Lucía es simplemente perfecta. Como veterinaria, tiene conocimientos que otros paseadores no tienen. Bella se sintió muy cómoda con ella y pudo darle la medicación sin problemas.',
      createdAt: new Date(2024, 0, 8),
      updatedAt: new Date(2024, 0, 8),
    },
    {
      id: 'review-5',
      bookingId: 'booking-5',
      reviewerId: 'owner-5',
      revieweeId: 'walker-5',
      rating: 4,
      comment: 'Ana es muy energética y perfecta para Coco. Le encanta jugar y hacer ejercicio con él. Mi único comentario es que me gustaría recibir más actualizaciones durante el paseo.',
      photos: ['https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=150'],
      createdAt: new Date(2024, 0, 5),
      updatedAt: new Date(2024, 0, 5),
    },
    {
      id: 'review-6',
      bookingId: 'booking-6',
      reviewerId: 'owner-6',
      revieweeId: 'walker-1',
      rating: 5,
      comment: 'Segunda vez que contrato a Carlos y sigue siendo excelente. Mia siempre regresa contenta y bien cuidada. Es muy confiable y profesional.',
      createdAt: new Date(2024, 0, 3),
      updatedAt: new Date(2024, 0, 3),
    },
    {
      id: 'review-7',
      bookingId: 'booking-7',
      reviewerId: 'owner-7',
      revieweeId: 'walker-2',
      rating: 3,
      comment: 'María es amable, pero creo que no tiene suficiente experiencia con perros grandes. Mi pastor alemán la intimidó un poco. Para perros más pequeños seguramente está bien.',
      createdAt: new Date(2024, 0, 1),
      updatedAt: new Date(2024, 0, 1),
    },
    {
      id: 'review-8',
      bookingId: 'booking-8',
      reviewerId: 'owner-8',
      revieweeId: 'walker-3',
      rating: 5,
      comment: 'Pedro es increíble. No solo paseó a mi perro, sino que también le enseñó algunos comandos nuevos. Definitivamente un profesional del entrenamiento canino.',
      createdAt: new Date(2023, 11, 28),
      updatedAt: new Date(2023, 11, 28),
    }
  ];

  // Mock walker and owner data
  const mockWalkers = {
    'walker-1': { name: 'Carlos González', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50' },
    'walker-2': { name: 'María López', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=50' },
    'walker-3': { name: 'Pedro Martínez', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50' },
    'walker-4': { name: 'Lucía Fernández', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50' },
    'walker-5': { name: 'Ana Ruiz', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=50' },
  };

  const mockOwners = {
    'owner-1': { name: 'Ana García' },
    'owner-2': { name: 'Luis Pérez' },
    'owner-3': { name: 'Carmen Ruiz' },
    'owner-4': { name: 'Javier López' },
    'owner-5': { name: 'Sofia Martín' },
    'owner-6': { name: 'Miguel Sánchez' },
    'owner-7': { name: 'Laura Jiménez' },
    'owner-8': { name: 'David Morales' },
  };

  useEffect(() => {
    setReviews(mockReviews);
  }, []);

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === filter);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`} 
      />
    ));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Reseñas de Paseadores</h2>
        
        {/* Estadísticas generales */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-400 fill-current mr-2" />
                <span className={`text-3xl font-bold ${getRatingColor(averageRating)}`}>
                  {averageRating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-600">Calificación Promedio</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MessageCircle className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-blue-600">{reviews.length}</span>
              </div>
              <p className="text-gray-600">Total de Reseñas</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-3xl font-bold text-red-500">
                  {Math.round((reviews.filter(r => r.rating >= 4).length / reviews.length) * 100)}%
                </span>
              </div>
              <p className="text-gray-600">Reseñas Positivas</p>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all' 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Todas ({reviews.length})
          </button>
          {[5, 4, 3, 2, 1].map(rating => (
            <button
              key={rating}
              onClick={() => setFilter(rating as 1 | 2 | 3 | 4 | 5)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                filter === rating 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
              {rating} ({reviews.filter(r => r.rating === rating).length})
            </button>
          ))}
        </div>
      </div>

      {/* Lista de reseñas */}
      <div className="space-y-6">
        {filteredReviews.map((review) => {
          const walker = mockWalkers[review.revieweeId as keyof typeof mockWalkers];
          const owner = mockOwners[review.reviewerId as keyof typeof mockOwners];
          
          return (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <img 
                  src={walker.avatar} 
                  alt={walker.name} 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{walker.name}</h3>
                      <p className="text-sm text-gray-600">Reseña por {owner.name}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(review.createdAt)}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  
                  {review.photos && review.photos.length > 0 && (
                    <div className="flex space-x-2 mb-4">
                      {review.photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`Foto del paseo ${index + 1}`}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">¿Te resultó útil?</span>
                      <button className="text-sm text-primary-600 hover:text-primary-700">
                        👍 Sí (3)
                      </button>
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        👎 No (0)
                      </button>
                    </div>
                    <button className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Responder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No hay reseñas con esta calificación
          </h3>
          <p className="text-gray-600">
            Intenta cambiar el filtro para ver más reseñas.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
