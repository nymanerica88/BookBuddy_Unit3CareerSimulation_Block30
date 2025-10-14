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
          <img className="Cover" src={CoverImage} alt="Main visual" />
        )}
        <Outlet />
      </main>
    </>
  );
}
