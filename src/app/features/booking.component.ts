import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../models/room.model';
import { SAMPLE_ROOMS } from '../data/room.data';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import {BookingDetailsComponent } from './components/booking-details/booking-details.component'

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    DateRangePickerComponent,
    RoomListComponent,
    BookingDetailsComponent
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  rooms = signal<Room[]>([...SAMPLE_ROOMS]);
  selectedRoomCode = signal<string | null>(null);
  dateErrorMessage = signal<string | null>(null);

  // Stub night count for inline room pricing preview
  stayNights = signal<number>(3);

  // State for the pop-up modal
  activeModalRoom = signal<Room | null>(null);

  onRoomSelect(room: Room): void {
    if (room.status === 'booked') return;
    this.activeModalRoom.set(room);
  }

  closeModal(): void {
    this.activeModalRoom.set(null);
  }

  handleBookingConfirmed(room: Room): void {
    console.log('Booked room:', room);
    this.closeModal();
  }
}
