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

export async function deleteReservation(token, id) {
  try {
    const response = await fetch(`${BASE_RESERVATION_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to return book. Please try again");
    }

    return await response;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
