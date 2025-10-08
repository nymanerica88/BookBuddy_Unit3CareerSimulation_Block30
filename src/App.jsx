
import { Routes, Route } from "react-router";
// import BookDetail from "./reservations/BookDetail";
import BookList from "./catalog/list";
import Layout from "./catalog/Layout";
import Register from "./auth/Register";



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<BookList />}>
            {/* <Route path=":id" element={<BookDetail />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}
