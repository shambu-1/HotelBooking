/**
 * Converts YYYY-MM-DD string to a local midnight Date object
 * avoiding UTC conversion drift.
 */
export function parseLocalDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return null;

  const [year, month, day] = parts;
  const parsed = new Date(year, month - 1, day, 0, 0, 0, 0);

  // Check if JavaScript rolled the date over to the next month
  if (
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day
  ) {
    return null;
  }

  return parsed;
}

/**
 * Returns today's date formatted as YYYY-MM-DD in local time
 * for setting the HTML5 `min` attribute.
 */
export function getTodayString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Validates check-in and check-out dates.
 * Returns null if valid, or an actionable error message string.
 */
export function validateDateRange(checkInStr: string, checkOutStr: string): string | null {
  if (!checkInStr || !checkOutStr) {
    return null; // Wait until both dates are selected
  }

  const checkIn = parseLocalDate(checkInStr);
  const checkOut = parseLocalDate(checkOutStr);

  if (!checkIn || !checkOut) {
    return 'Invalid date format.';
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (checkIn < today) {
    return 'Check-in date cannot be in the past.';
  }

  if (checkOut <= checkIn) {
    return 'Check-out date must be strictly after check-in date.';
  }

  return null;
}

/**
 * Calculates full calendar nights between two local dates.
 */
export function calculateNights(checkInStr: string, checkOutStr: string): number {
  if (validateDateRange(checkInStr, checkOutStr) !== null) {
    return 0;
  }
  const checkIn = parseLocalDate(checkInStr);
  const checkOut = parseLocalDate(checkOutStr);
  if (!checkIn || !checkOut) return 0;

  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((checkOut.getTime() - checkIn.getTime()) / msPerDay);
}