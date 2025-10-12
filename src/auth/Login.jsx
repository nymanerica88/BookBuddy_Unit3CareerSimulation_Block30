import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./ContextToken";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isError, token } = useAuth();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
      if (!isError) {
        navigate("/account-details");
      }
    } catch (error) {
      console.error(
        "Login failed. If you're receiving this error message and are an existing Book Buddy Club Member, please contact customer service at 800-523-6629. Otherwise, please register for a new account.",
        error
      );
    }
  }

  return (
    <>
      <h1>Welcome to the Book Buddy Login Page! </h1>
      <p>
        Book Buddy is the most popular book club around with a new recommended
        reading list available each month and additional special offers and
        perks available to club members.
      </p>
      <p>
        Please login below to access the recommended reading list and additional
        Book Buddy Club membership perks. 📚
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          E-Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
      {!isError && (
        <p>
          Don't have an account? Please <Link to="register">register here</Link>
        </p>
      )}
      {isError && (
        <p>
          We're sorry, but we're not showing an existing account under this
          username and password. Please <Link to="/register">register</Link>
        </p>
      )}
    </>
  );
}
