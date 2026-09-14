import { Routes } from '@angular/router';
import { BookingComponent } from './features/booking.component';

export const routes: Routes = [
    { path: '', redirectTo: '/book_list', pathMatch: 'full' },

    // Standard routes
    { path: 'book_list', component: BookingComponent},
];
