"use client";
import React, { ComponentPropsWithoutRef, FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icons } from ".";
interface IProps extends ComponentPropsWithoutRef<"button"> {}
const ThemeSwitcher: FC<IProps> = ({ className }) => {
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
        {theme === "light" ? (
          <Icons.Moon className={className} />
        ) : (
          <Icons.Sun className={className} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
