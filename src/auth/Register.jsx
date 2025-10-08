// import { useAuth } from "./ContextToken";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Register() {
  const [error, setError] = useState(null);
  // const { register } = useAuth();
  const navigate = useNavigate();
  // async function handleSubmit(formData) {
  //   setError(null);
  //   const firstname = formData.get("firstname");
  //   const lastname = formData.get("lastname");
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   try {
  //     await register(firstname, lastname, email, password);
  //   } catch (error) {
  //     console.error(
  //       "Registration could not be completed at this time. Please contact customer service at 800-523-6629.",
  //       error
  //     );
  //   }
  // }
  return (
    <>
      <h1>Welcome to the Book Buddy Registration Corner! </h1>
      <p>We're excited to have you join our Book Buddy Club. 📚</p>
      <p>
        We're not currently showing that you have a pre-existing account, so
        please register below to create a new account. Once you register for a
        new account and login, you'll have access to special offers for book
        club members, including our recommended reading list!
      </p>
      <form>
        <label>
          First Name
          <input type="text" name="firstname" />
        </label>
        <br />
        <label>
          Last Name
          <input type="text" name="lastname" />
        </label>
        <br />
        <label>
          E-Mail
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <br />
        <button>Register</button>
      </form>
    </>
  );
}
