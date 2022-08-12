import React from "react";
import { Link, RouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1>404</h1>
      Page Not Found
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </main>
  );
}
