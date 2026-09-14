import { Component, input, output } from '@angular/core';
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

  onSelect(room: Room): void {
    this.roomSelected.emit(room);
  }
}