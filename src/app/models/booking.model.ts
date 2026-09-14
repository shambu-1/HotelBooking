import { Room } from './room.model';

export interface DateRange {
  checkIn: string;   // ISO string format: 'YYYY-MM-DD'
  checkOut: string;  // ISO string format: 'YYYY-MM-DD'
}

export interface BookingSummary {
  room: Room;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  pricePerNight: number;
  totalPrice: number;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}
