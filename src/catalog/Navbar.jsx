import { NavLink } from "react-router";

const NavClass = ({ isActive }) => link + (isActive ? "active" : "");

// Navbar with site navigation links 
export default function Navbar() {
    const { token, logout } = useAuth();

return (
    <header>
        <p>Book Buddy</p>
    <nav>
        <NavLink to="/list">
        Books
        </NavLink>

        <NavLink to="/accountprofile">
        Account
        </NavLink>

        <NavLink to="/logout">
        Log Out
        </NavLink>
    </nav>

    </header>
)

}