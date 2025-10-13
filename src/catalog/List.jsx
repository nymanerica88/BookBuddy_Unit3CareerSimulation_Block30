import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import BookSearch from "./search";

export default function List() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
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

const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div>
    <BookSearch query={query} setQuery={setQuery} filtered={filtered} />
    <ul>
      {filtered.map((book) => (
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
    </div>
  );
}
