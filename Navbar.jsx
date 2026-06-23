"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navbar() {
 const [darkMode, setDarkMode] = useState(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") === "dark";
  }
  return false;
});

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
const toggleTheme = () => {
  if (darkMode) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  setDarkMode(!darkMode);
};
  return (
    <nav className="bg-green-700 dark:bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">AgriChat</h1>

        <div className="flex flex-wrap gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
        </div>

        <div className="flex items-center gap-3">
  <button
    onClick={toggleTheme}
    className="bg-white text-green-700 px-3 py-1 rounded"
  >
    {darkMode ? "☀️" : "🌙"}
  </button>

  <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold">
    V
  </div>
</div>
      </div>
    </nav>
  );
}