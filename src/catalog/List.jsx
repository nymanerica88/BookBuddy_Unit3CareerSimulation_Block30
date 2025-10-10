import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getBooks } from "../api/books";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const syncBooks = async () => {
      const bookList = await getBooks();
      setBooks(bookList);
    };
    syncBooks();
  }, []);

  const handleViewBook = (id) => {
    navigate(`${id}`);
  };

  if (!books) {
    return <p>Loading books...</p>;
  }
  if (books.length === 0) {
    return <p>No books available.</p>;
  }
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>
            <div>
              <img
                src={book.coverimage}
                alt={`Cover of ${book.title}`}
                style={{ width: "100px", height: "auto" }}
              />

              <h3>{book.title}</h3>
              <button onClick={handleViewBook}>View</button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
