// User types
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phoneNumber?: string;
  address?: string;
  role: 'owner' | 'walker' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Walker types
export interface Walker {
  id: string;
  userId: string;
  name: string;
  bio: string;
  avatar?: string;
  rating: number;
  totalReviews: number;
  pricePerHour: number;
  experience: string;
  services: string[];
  availability: Availability[];
  location: Location;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Availability {
  day: string; // 'monday', 'tuesday', etc.
  startTime: string; // '09:00'
  endTime: string; // '18:00'
  available: boolean;
}

// Location types
export interface Location {
  lat: number;
  lng: number;
   address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

// Pet types
export interface Pet {
  id: string;
  ownerId: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  size: 'small' | 'medium' | 'large';
  specialNeeds?: string;
  photos: string[];
  vaccinated: boolean;
  temperament: string;
  createdAt: Date;
  updatedAt: Date;
}

// Booking types
export interface Booking {
  id: string;
  ownerId: string;
  walkerId: string;
  petIds: string[];
  date: Date;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  notes?: string;
  walkRoute?: WalkRoute;
  paymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Walk route types
export interface WalkRoute {
  id: string;
  bookingId: string;
  startLocation: Location;
  endLocation: Location;
  waypoints: Location[];
  distance: number; // in kilometers
  duration: number; // in minutes
  actualStartTime?: Date;
  actualEndTime?: Date;
  photos: string[];
  notes?: string;
}

// Review types
export interface Review {
  id: string;
  bookingId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number; // 1-5
  comment: string;
  photos?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Payment types
export interface Payment {
  id: string;
  bookingId: string;
  ownerId: string;
  walkerId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  stripePaymentIntentId: string;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: 'booking_request' | 'booking_confirmed' | 'booking_completed' | 'payment_received' | 'review_received';
  title: string;
  message: string;
  read: boolean;
  data?: any;
  createdAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
  phoneNumber: string;
  role: 'owner' | 'walker';
}

export interface BookingForm {
  petIds: string[];
  date: string;
  startTime: string;
  duration: number;
  notes?: string;
}

export interface ReviewForm {
  rating: number;
  comment: string;
  photos?: File[];
}

// Map types
export interface MapProps {
  center: Location;
  zoom: number;
  markers?: MapMarker[];
  routes?: MapRoute[];
  onLocationSelect?: (location: Location) => void;
  height?: string;
}

export interface MapMarker {
  id: string;
  position: Location;
  title: string;
  icon?: string;
  onClick?: () => void;
}

export interface MapRoute {
  id: string;
  path: Location[];
  color: string;
  weight: number;
}

// Filter types
export interface WalkerFilters {
  location?: Location;
  radius?: number; // in kilometers
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  availability?: {
    date: string;
    startTime: string;
    endTime: string;
  };
  services?: string[];
}
