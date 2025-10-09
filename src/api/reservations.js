const API = import.meta.env.VITE_API;
const BASE_RESERVATION_URL = `${API}/reservations`;

export async function addReservation(token, bookId) {
  if (!token) {
    throw new Error("Please log in to reserve book");
  }

  const response = fetch(BASE_RESERVATION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bookId }),
  });

  if (!response.ok) {
    await response.json();
    throw Error("Failure to reserve book: Already reserved");
  }
}
