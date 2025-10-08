const API = import.meta.env.VITE_API;
const BASE_BOOKS_URL = `${API}/books`;

/** Fetch all books from the API */
export async function getBooks() {
  try {
    const response = await fetch(BASE_BOOKS_URL);
    if (!response.ok) {
      throw Error("Failed to fetch books");
    }
    return await response.json();
  } catch (e) {
    console.error("Error fetching books:", e);
    return [];
  }
}

export async function getBookDetails(id) {
  try {
    const response = await fetch(`${BASE_BOOKS_URL}/${id}`);
    if (!response.ok) {
      throw Error("Failed to fetch book details");
    }
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
