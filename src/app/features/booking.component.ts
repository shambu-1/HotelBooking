import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../models/room.model';
import { SAMPLE_ROOMS } from '../data/room.data';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { calculateNights, validateDateRange } from '../core/utils/date.utils';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, DateRangePickerComponent, RoomListComponent, BookingDetailsComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  readonly rooms = signal<Room[]>([...SAMPLE_ROOMS]);
  readonly selectedRoomCode = signal<string | null>(null);

  // Selected date signals
  readonly checkInDate = signal<string>('');
  readonly checkOutDate = signal<string>('');

  // Automatically computed error message from date.utils
  readonly dateErrorMessage = computed<string | null>(() => {
    return validateDateRange(this.checkInDate(), this.checkOutDate());
  });

  // Automatically computed nights
  readonly stayNights = computed<number>(() => {
    return calculateNights(this.checkInDate(), this.checkOutDate());
  });

  // Computed flag: true only when both dates are chosen and valid
  readonly hasValidDates = computed<boolean>(() => {
    const checkIn = this.checkInDate();
    const checkOut = this.checkOutDate();
    const error = this.dateErrorMessage();
    const nights = this.stayNights();

    return Boolean(checkIn && checkOut && !error && nights > 0);
  });

  // State for the pop-up modal
  readonly activeModalRoom = signal<Room | null>(null);

  // Date handlers invoked by DateRangePickerComponent outputs
  onCheckInChanged(val: string): void {
    this.checkInDate.set(val);
  }

  onCheckOutChanged(val: string): void {
    this.checkOutDate.set(val);
  }

  onRoomSelect(room: Room): void {
    if (room.status === 'booked') return;
    this.selectedRoomCode.set(room.code);
    this.activeModalRoom.set(room);
  }

  closeModal(): void {
    this.activeModalRoom.set(null);
    this.selectedRoomCode.set(null);
  }

  handleBookingConfirmed(room: Room): void {
    console.log('Booked room:', room);
    this.closeModal();
  }
}
