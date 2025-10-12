import { Routes, Route } from "react-router";
import BookDetail from "./reservations/BookDetail";
import List from "./catalog/list";
import Layout from "./catalog/Layout";
import Register from "./auth/Register";
import Login from "./auth/Login";
import NotFound from "./catalog/NotFound";
import AccountProfile from "./auth/AccountProfile";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="account-details" element={<AccountProfile />} />
          <Route path="/books" element={<List />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
