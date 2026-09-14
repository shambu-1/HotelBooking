import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../models/room.model';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent {
  room = input.required<Room>();
  nights = input<number>(1);

  close = output<void>();
  confirmBooking = output<Room>();

  onClose(): void {
    this.close.emit();
  }

  onConfirm(): void {
    this.confirmBooking.emit(this.room());
  }
}