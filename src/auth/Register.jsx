// import { useAuth } from "./ContextToken";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./ContextToken";

export default function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register, isError } = useAuth();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log("submit");
      const newUser = await register(firstname, lastname, email, password);
      console.log("newUser", newUser);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      if (!isError) {
        navigate("/login");
      }
    } catch (error) {
      console.error(
        "Registration could not be completed at this time. Please contact customer service at 800-523-6629.",
        error
      );
    }
  }

  return (
    <>
      <h1>Welcome to the Book Buddy Registration Corner! </h1>
      <p>We're excited to have you join our Book Buddy Club. </p>
      <p>
        We're not currently showing that you have a pre-existing account, so
        please register below to create a new account. Once you register for a
        new account and login, you'll have access to special offers for book
        club members, including our recommended reading list!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
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
        <button>Register</button>
      </form>
      {isError && (
        <p>
          This user already has an account. Please{" "}
          <Link to="/login">login</Link>
        </p>
      )}
    </>
  );
}
