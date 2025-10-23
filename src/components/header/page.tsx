"use client";

import React from "react";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex gap-x-4 items-center px-2 py-2   fixed top-0 w-full z-[9999]">
      <SidebarTrigger className="size-4" />
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
