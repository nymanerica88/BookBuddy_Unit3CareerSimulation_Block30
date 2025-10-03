import { NavLink } from "react-router";
export default function NavBar() {
  return (
    <section className="nav">
      <p>Book Buddy</p>
      <NavLink to="/reservation">Reservation</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/books">Books</NavLink>
    </section>
  );
}
