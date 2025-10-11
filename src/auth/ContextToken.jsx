import { createContext, useContext, useMemo, useState } from "react";

import { useNavigate } from "react-router";

const API = import.meta.env.VITE_API;

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

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
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setIsError(true);
        throw new Error("Login failed.");
      }
      const data = await response.json();
      console.log(data);
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setIsError(true);
      console.error("The login didn't work properly");
    }
  }

  async function authenticate(token) {
    try {
      const response = await fetch(`${API}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Authentication failed: ", response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {}
  }

  function logout() {
    setToken(null);
    setIsError(false);
    localStorage.removeItem("token");
    navigate("/books");
  }

  // async function login(email, password) {
  //   try {
  //     const response = await fetch(`${API}/users/login`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     await response.json();
  //   } catch (error) {
  //     console.error("Login Error", error);
  //   }
  // }

  const value = useMemo(() => {
    return {
      register,
      login,
      isError,
      authenticate,
      token,
      logout,
    };
  }, [register, login, isError, authenticate, token, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
