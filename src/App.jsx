import { Routes, Route } from "react-router";
import BookDetail from "./reservations/BookDetail";
import List from "./catalog/List";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<List />}>
          <Route path=":id" element={<BookDetail />} />
        </Route>
      </Routes>
    </>
  );
}
