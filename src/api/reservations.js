const API = import.meta.env.VITE_API;
const BASE_RESERVATION_URL = `${API}/reservations`;

export async function addReservation(token, bookId) {
  if (!token) {
    throw new Error("Please log in to reserve book");
  }

  try {
    const response = fetch(BASE_RESERVATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookId }),
    });
    const result = await response;

    if (!result.ok) {
      throw new Error("Book Reserved.");
    }

    return result.status;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function getReservations(token) {
  try {
    const response = await fetch(BASE_RESERVATION_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
