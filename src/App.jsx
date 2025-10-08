import { Routes, Route } from "react-router";
// import BookDetail from "./reservations/BookDetail";
import BookList from "./catalog/list";
import Layout from "./catalog/Layout";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/books" element={<BookList />}>
            {/* <Route path=":id" element={<BookDetail />} /> */}
          </Route>
          </Route>
      </Routes>
    </>
  );
}
