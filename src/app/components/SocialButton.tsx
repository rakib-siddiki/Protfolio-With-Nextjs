"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string | undefined;
  link:string
}

const SocialButton: React.FC<Props> = ({ link,children, bgColor = "black" }) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case "dribbble":
      bgHoverColorClass = "hover:bg-dribbble";
      break;
    case "instagram":
      bgHoverColorClass = "hover:bg-instagram";
      break;
    case "twitter":
      bgHoverColorClass = "hover:bg-twitter";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-linkedin";
      break;
    default:
      bgHoverColorClass = "hover:bg-black";
      break;
  }

  return (
    <motion.button
      initial={{ scale: 0.9}}
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.3 }}
      className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <Link href={link} className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </Link>
    </motion.button>
  );
};

export default SocialButton;
