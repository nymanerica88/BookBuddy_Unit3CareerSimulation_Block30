import { NavLink } from "react-router";
// import { useAuth } from "./auth/ContextToken";

const NavClass = ({ isActive }) => link + (isActive ? "active" : "");

// Navbar with site navigation links
export default function Navbar() {
  // const { token, logout } = useAuth();

  return (
    <header>
      <p>Book Buddy</p>
      <nav>
        <NavLink to="/books">Books</NavLink>

        {/* {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
          </>
        )} */}
      </nav>
    </header>
  );
}
