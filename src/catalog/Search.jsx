import { useState } from "react";
import List from "./list";

export default function Search({ query, setQuery, filtered }) {
  const [results, setResults] = useState([]);
  const [timeout, setTimeout] = useState(null);

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(error) => setQuery(error.target.value)}
      />

      {filtered?.length === 0 && <p>No results for {query}</p>}

      {query && <button onClick={() => setQuery("")}>Clear</button>}
    </div>
  );
}
