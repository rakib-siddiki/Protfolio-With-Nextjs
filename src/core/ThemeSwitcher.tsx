"use client";
import React, { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icons } from ".";

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <div>
      <button
        className="w-fit hover:scale-110 transition"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Icons.Moon /> : <Icons.Sun />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
