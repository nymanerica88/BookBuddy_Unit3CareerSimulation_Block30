import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getBookDetails } from "../api/books";

export default function BookDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedBook, setSelectedBook] = useState(null);
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

  return selectedBook ? (
    <section className="book-detail">
      <button onClick={handleBackButton}>Back</button>
      <h2>{selectedBook.title}</h2>
      <h3>Author: {selectedBook.author}</h3>
      {/* <img src={selectedBook.coverimage} alt="" /> */}
      <p>
        Description: {selectedBook.description}
        <br />
        {selectedBook.available ? "Available" : "Out of Stock"}
      </p>
      <button
        className={`book-reserve ${
          selectedBook.available ? " available" : " not-available"
        }`}
      >
        Reserve Book
      </button>
    </section>
  ) : (
    <p>Please select a book to view more details</p>
  );
}
