import { Room } from './room.model';

export interface DateRange {
  checkIn: Date | null;
  checkOut: Date | null;
}

export interface BookingSummary {
  room: Room;
  checkInDate: Date;
  checkOutDate: Date;
  nights: number;
  pricePerNight: number;
  totalPrice: number;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}
