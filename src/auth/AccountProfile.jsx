import { useState, useEffect } from "react";
import { useAuth } from "./ContextToken";
import { getReservations, deleteReservation } from "../api/reservations";

export default function AccountProfile() {
  const { token, authenticate } = useAuth();
  const [user, setUser] = useState(null);
  const [usersReservedBooks, setUsersReservedBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    async function getUser() {
      const userData = await authenticate(token);
      setUser(userData);
    }
    getUser();
  }, [token]);

  useEffect(() => {
    const syncUsersBooks = async () => {
      const books = await getReservations(token);
      setUsersReservedBooks(books);
    };
    syncUsersBooks();
  }, [token, usersReservedBooks]);

  const handleReturnBook = async (event) => {
    setError(null);
    event.preventDefault();
    const id = event.target.id;
    try {
      await deleteReservation(token, id);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>
        Welcome, {user?.firstname} {user?.lastname}{" "}
      </h1>
      <p>email: {user?.email}</p>
      {usersReservedBooks?.length === 0 ? (
        <p>No Books Reserved.</p>
      ) : (
        <ul className="reserved-books">
          {usersReservedBooks.map((reservation) => {
            return (
              <li key={reservation.id}>
                {reservation.title}
                <button id={reservation.id} onClick={handleReturnBook}>
                  Return
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
