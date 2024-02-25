"use client";
import { SocialButton } from ".";
import { Icons } from "@/core";
import { motion } from "framer-motion";
import profile from "../../../public/Profile.png";
import Image from "next/image";
const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-16"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="rounded-lg p-10 flex flex-col gap-16 bg-gradient-to-r  from-yellow-100 to-indigo-100 dark:bg-gradient-to-r dark:from-indigo-100 dark:to-yellow-100 bg-cover"
      >
        <h1 className="text-4xl font-semibold text-gray-800 leading-10">
          Hello, {`I'm Rakib`} a Mern Stack Devoloper with 2+ years of
          experience.
        </h1>
        <p className="flex-1 text-gray-800">
          Experienced MERN Stack Engineer adept at crafting dynamic user
          interfaces and robust backend solutions using cutting-edge
          technologies.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
          <button className="bg-gradient-to-b from-gray-900 to-gray-600 text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto active:scale-105">
            Contact me
          </button>
          <div className="flex items-center gap-4">
            <SocialButton bgColor="dribbble">
              <Icons.Dribbble className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="instagram">
              <Icons.Instagram className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="twitter">
              <Icons.Twitter className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <Icons.Linkedin className="w-5 h-5" />
            </SocialButton>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={` relative  rounded-lg overflow-hidden bg-gradient-to-bl from-yellow-50 to-indigo-100`}
      >
        <Image
          width={500}
          height={1000}
          src={profile}
          placeholder="blur"
          alt="profile"
          className="object-cover object-center h-full w-full "
        />
      </motion.div>
    </section>
  );
};

export default About;
