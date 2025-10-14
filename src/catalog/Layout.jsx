import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar";
import CoverImage from "../cover/CoverImage.jpg";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main>
        {location.pathname === "/" && (
          <img
            className="Cover"
            src={CoverImage}
            alt="Main visual"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
            }}
          />
        )}
        <Outlet />
      </main>
    </>
  );
}
