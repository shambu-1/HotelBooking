import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../models/room.model';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent {
  rooms = input<Room[]>([]);
  selectedRoomCode = input<string | null>(null);
  roomSelected = output<Room>();

  // Tracks error when user tries to select an unavailable room
  bookingError = signal<string | null>(null);

  onSelect(room: Room): void {
    if (room.status === 'booked') {
      this.bookingError.set(`Room ${room.code} (${room.type}) is already booked for these dates and cannot be selected.`);
      return;
    }

    // Clear error on valid selection and emit
    this.bookingError.set(null);
    this.roomSelected.emit(room);
  }
}