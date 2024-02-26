"use client";
import ThemeSwitcher from "@/core/ThemeSwitcher";
import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINK } from "../Db/Menu";
import { Icons } from "@/core";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [show, setShow] = useState(false);
  const handleActive = (link: string) => {
    setActive(link);
    setShow(false);
  };
  const handleShow = () => {
    setShow((prev) => !prev);
  };
 

  return (
    <>
      <nav
        className="sticky top-5 z-50 max-w-[980px] xl:w-[1024px] mx-auto hidden lg:flex justify-between items-center py-4 px-4 bg-white rounded-full 
      bg-gradient-to-t from-yellow-50 to-white  shadow-xl mb-16"
      >
        <div className="flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
          <span className="text-2xl font-bold tracking-wider dark:text-slate-950">
            Rakib Siddiki
          </span>
        </div>
        <div className="flex gap-12 text-md text-zinc-400">
          {(NAV_LINK ?? []).map(({ id, label, link }) => (
            <Link
              key={id}
              href={link}
              className={`${
                active === label
                  ? "text-gray-900 font-bold transition duration-200"
                  : "text-gray-600"
              } `}
              onClick={() => handleActive(label)}
            >
              {label}
            </Link>
          ))}
          <ThemeSwitcher className="stroke-gray-700 hover:scale-105 transition-all duration-300" />
        </div>
      </nav>
      {/* smaller device */}
      <nav
        className={`p-5 fixed lg:hidden z-50 i w-full  bg-gradient-to-t from-yellow-50 to-white dark:bg-gradient-to-t dark:from-black  
        dark:to-black${
          show &&
          "h-full  bg-gradient-to-t from-yellow-50/90 to-white dark:bg-gradient-to-t dark:from-black/85  dark:to-black/85"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-yellow-400 rounded-full" />
            <span className="text-2xl font-bold tracking-wider dark:text-white">
              Rakib <span className="dark:text-yellow-400">Siddiki</span>
            </span>
          </div>
          <div className="flex items-baseline gap-4">
            <ThemeSwitcher className="stroke-gray-700 dark:stroke-white hover:scale-105 transition-all duration-300" />
            {show ? (
              <motion.div
                whileTap={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Icons.X onClick={handleShow} />
              </motion.div>
            ) : (
              <Icons.Menu onClick={handleShow} />
            )}
          </div>
        </div>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: show ? 0 : -100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex flex-col items-center justify-center h-dvh gap-8 text-2xl text-zinc-400"
          >
            {(NAV_LINK ?? []).map(({ id, label, link }) => (
              <Link
                key={id}
                href={link}
                className={`${
                  active === label
                    ? "text-gray-900 dark:text-zinc-100 font-bold transition duration-200"
                    : "text-gray-600 dark:text-zinc-400"
                } `}
                onClick={() => handleActive(label)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
