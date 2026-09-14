# HotelBooking
## Tech Stack
- **Framework:** Angular (Standalone Components, Signals)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (no heavy external UI libraries)
- **Testing:** Jasmine / Karma (or Vitest)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation & Run
1. Install dependencies:
   ```bash
   npm install
2. Run the app:
    ```bash
    npm start
## Features & Implementation Highlights

- **Room Catalog:** Displays sample room options (Deluxe Rooms, Executive Suites, Family Rooms) with rates and guest limits.
- **Dynamic Calculation:** Automatically calculates the number of nights and total booking price (`nights × price per night`) using Angular reactive signals.
- **Date & Input Validation:**
  - Check-in cannot be in the past.
  - Check-out date must be strictly after the check-in date.
  - Displays clear, user-facing error messages instead of failing silently.
- **Room Availability / Conflict Guard:** Rooms have an availability status in the catalog; clicking an already-booked room alerts the user with an explicit error message preventing invalid selections.

---

## What I'd Improve With More Time

To strictly honor the 2-hour assessment time limit, the optional bonus features were deprioritized. With more time, I would focus on:

- **Automated Unit Tests:** Add Jasmine/Karma test suites targeting calculation and edge-case behaviors (e.g., same-day selection rejection, past date guards, boundary-month stay calculations, and total price formula accuracy).
- **Guest Capacity Filter:** Add a party size dropdown to dynamically filter available rooms by `maxGuests`.
- **Accessibility & UX:** Enhance WCAG compliance with `aria-live` regions for validation messages and accessible form controls.