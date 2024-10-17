"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-[#ff5e1a] rounded-full" />
        <span className="text-sm font-semibold tracking-widest">
          <Link href="/">Rachel McDermott.</Link>
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex gap-12 text-md text-zinc-400">
          <Link
            href="#about"
            className="hover:text-[#ff5e1a] active:text-black font-medium"
          >
            About
          </Link>
          <Link href="#projects" className="hover:text-[#ff5e1a] font-medium">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[#ff5e1a] font-medium">
            Contact
          </Link>
        </div>
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
