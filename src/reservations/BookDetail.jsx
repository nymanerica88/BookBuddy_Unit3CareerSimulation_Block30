import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getBookDetails } from "../api/books";
import { addReservation } from "../api/reservations";

export default function BookDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useState(null);

  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);

  const handleBackButton = () => {
    navigate("/books");
  };

  useEffect(() => {
    const syncBookDetails = async () => {
      const book = await getBookDetails(id);
      setSelectedBook(book);
    };
    syncBookDetails();
  }, [id]);

  const handleReserveBook = async () => {
    setError(null);
    try {
      await addReservation(token, id);
    } catch (error) {
      setError(error.message);
    }
  };

  return selectedBook ? (
    <section className="book-detail" key={selectedBook.id}>
      <button onClick={handleBackButton}>Back</button>
      <h2>{selectedBook.title}</h2>
      <h3>Author: {selectedBook.author}</h3>
      <img
        src={selectedBook.coverimage}
        alt={`Cover of ${selectedBook.title}`}
      />
      <p className="book-description">
        Description: {selectedBook.description}
        <br />
        {selectedBook.available ? "Available" : "Out of Stock"}
      </p>
      <button
        className={`book-reserve ${
          selectedBook.available ? " available" : " not-available"
        }`}
        onClick={handleReserveBook}
      >
        Reserve Book
      </button>
      {error && <p role="alert">{error}</p>}
    </section>
  ) : (
    <p>Please select a book to view more details</p>
  );
}
