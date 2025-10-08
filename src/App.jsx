<<<<<<< Updated upstream
import { Route } from "react-router";
import { Routes } from "react-router";
=======
import { Routes, Route } from "react-router";
// import BookDetail from "./reservations/BookDetail";
import BookList from "./catalog/list";
import Layout from "./catalog/Layout";
import Register from "./auth/Register";
>>>>>>> Stashed changes

export default function App() {
  return (
    <>
<<<<<<< Updated upstream
      <h1>App</h1>
=======
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<BookList />}>
            {/* <Route path=":id" element={<BookDetail />} /> */}
          </Route>
        </Route>
      </Routes>
>>>>>>> Stashed changes
    </>
  );
}
