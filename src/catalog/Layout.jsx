import React from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";
import CoverImage from "../cover/CoverImage.jpg";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <img
          src={CoverImage}
          alt="Main visual"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            marginBottom: "1rem",
          }}
        />
        <Outlet />
      </main>
    </>
  );
}
