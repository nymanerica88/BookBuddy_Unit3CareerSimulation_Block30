import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
}

async function register(firstname, lastname, email, password) {
  try {
    const response = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });
    const { token } = await response.json();
    setToken(token);
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Registration Error", "error");
  }
}

async function login(email, password) {
  try {
    const response = await fetch(`${API}/users/login`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    await response.json();
  } catch (error) {
    console.error("Login Error", error);
  }
}

const value = { firstname, lastname, email, password };
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
