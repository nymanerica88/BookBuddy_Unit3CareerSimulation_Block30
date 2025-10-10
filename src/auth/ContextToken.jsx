import { createContext, useContext, useState } from "react";
const API = import.meta.env.VITE_API;

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isError, setIsError] = useState(false);

  async function register(firstname, lastname, email, password) {
    try {
      console.log(API);
      const response = await fetch(`${API}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });
      if (!response.ok) {
        throw new Error(
          "There was an error with your request. HTTP STATUS ",
          response.status
        );
      }
      const data = await response.json();
      setToken(data.token);
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      setIsError(true);
      console.error("Registration Error", "error");
    }
  }

  async function login(email, password) {
    try {
      const response = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      console.error("Login Error", error);
    }
  }

  const value = { register, login, isError };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
