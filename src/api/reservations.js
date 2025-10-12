const API = import.meta.env.VITE_API;
const BASE_RESERVATION_URL = `${API}/reservations`;

export async function addReservation(token, bookId) {
  if (!token) {
    throw new Error("Please log in to reserve book");
  }

  try {
    const response = await fetch(BASE_RESERVATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookId }),
    });
    const result = await response;

    if (!result.ok) {
      throw new Error("Book already reserved. Please reserve different book.");
    }

    return result.status;
  } catch (error) {
    throw new Error(error.message);
  }
}
