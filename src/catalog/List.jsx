import { Link } from "react-router";

export default function BookList({ books }) {
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
              <p>by {book.author}</p>
              <p>{book.available ? "Available" : "Reserved"}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
