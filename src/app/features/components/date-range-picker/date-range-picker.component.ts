import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.css'
})
export class DateRangePickerComponent {
  // Stub inputs & outputs for state connection in next step
  checkInDate = input<string>('2026-09-20');
  checkOutDate = input<string>('2026-09-23');
  errorMessage = input<string | null>(null);

  checkInChange = output<string>();
  checkOutChange = output<string>();

  onCheckIn(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.checkInChange.emit(val);
  }

  onCheckOut(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.checkOutChange.emit(val);
  }
}