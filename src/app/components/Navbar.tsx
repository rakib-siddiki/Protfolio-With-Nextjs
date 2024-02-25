import ThemeSwitcher from "@/core/ThemeSwitcher";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-5 z-50 flex justify-between items-center py-4 px-4 bg-white rounded-full   bg-gradient-to-t from-yellow-50 to-white  shadow-xl  mb-10">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-2xl font-bold tracking-wider dark:text-slate-950">
          Rakib Siddiki
        </span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="text-gray-900  font-medium">
          Home
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
