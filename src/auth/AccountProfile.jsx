import { useState, useEffect } from "react";
import { useAuth } from "./ContextToken";

export default function AccountProfile() {
  const { token, authenticate } = useAuth();
  const [user, setUser] = useState(null);
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
  return (
    <section>
      <h1>
        Welcome, {user?.firstname} {user?.lastname}{" "}
      </h1>
      <p>email: {user?.email}</p>
    </section>
  );
}
