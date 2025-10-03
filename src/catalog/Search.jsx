import { useState, useEffect } from "react";
// import BookList from "./List";

export default function BookSearch({ allBooks }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(allBooks);
  const [timeout, setTimeout] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults(allBooks);
      return;
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      const filtered = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }, 300);

    setTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [query, allBooks]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(error) => setQuery(error.target.value)}
      />

      {results.length === 0 ? (
        <p>No results for "{query}"</p>
      ) : (
        <BookList books={results} />
      )}

      {query && <button onClick={() => setQuery("")}>Clear</button>}
    </div>
  );
}
