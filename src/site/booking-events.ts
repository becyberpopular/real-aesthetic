import type { Lang } from "./lang";

export type OpenBookingDetail = { calendarId: string; lang: Lang };
export const OPEN_BOOKING_EVENT = "ra:book";

/** Open the booking pop-up for a calendar from code (e.g. the bottom-bar Book button on treatment pages). */
export function openBooking(calendarId: string, lang: Lang) {
  window.dispatchEvent(
    new CustomEvent<OpenBookingDetail>(OPEN_BOOKING_EVENT, { detail: { calendarId, lang } }),
  );
}
