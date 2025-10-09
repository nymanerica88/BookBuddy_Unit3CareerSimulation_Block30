import { useState } from "react";
import { useAuth } from "./ContextToken";

export default function CompleteLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(
        "Login failed. If you're receiving this error message and are an existing Book Buddy Club Member, please contact customer service at 800-523-6629. Otherwise, please register for a new account.",
        error
      );
    }
  }

  return (
    <>
      <h1>Welcome to Book Buddy! </h1>
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
    </>
  );
}
