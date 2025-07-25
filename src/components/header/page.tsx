"use client";

import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        My App
      </h1>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
};

export default Header;
