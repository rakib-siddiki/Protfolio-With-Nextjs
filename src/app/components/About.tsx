"use client";
import { SocialButton } from ".";
import { Icons } from "@/core";
import { motion } from "framer-motion";
import profile from "../../../public/Profile.png";
import Image from "next/image";
import { useEffect } from "react";
import { SKILS } from "../Db/Skills";
import Link from "next/link";
const About = () => {
  useEffect(() => {
    const myComponent = document.getElementById("home");
    if (myComponent) {
      myComponent.style.scrollMarginTop = "100px";
    }
  }, []);
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4  mb-12"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="rounded-lg p-10 flex flex-col gap-7 bg-gradient-to-r  from-yellow-100 to-indigo-100 dark:bg-gradient-to-r dark:from-indigo-100 dark:to-yellow-100 bg-cover max-lg:mt-24"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-10">
          Hello, {`I'm Rakib`} a Mern Stack Devoloper with 2+ years of
          experience.
        </h1>
        <div>
          <p className="flex-1 text-gray-800 mb-3">
            Experienced MERN Stack Engineer adept at crafting dynamic user
            interfaces and robust backend solutions using cutting-edge
            technologies.
          </p>
          <span className="text-gray-800 font-bold">
            Examples of acquired skills :{">"}
          </span>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
            {(SKILS ?? []).map(({ id, name }) => (
              <li key={id} className="text-sm text-gray-700">
                <span className="size-1.5 rounded-b-xl rounded-l-xl bg-gray-900  inline-block"></span>{" "}
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
          <Link
            href={
              "https://docs.google.com/document/d/1xERFw28KiQwzkolMfpY_U2wUoXBpyATT/edit?usp=sharing&ouid=107622900685458882405&rtpof=true&sd=true"
            }
            target="_blank"
            className="bg-gradient-to-b from-gray-900 to-gray-600 text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto active:scale-105"
          >
            Resume
          </Link>
          <div className="flex items-center gap-4">
            <SocialButton link="#" bgColor="dribbble">
              <Icons.Dribbble className="w-5 h-5" />
            </SocialButton>
            <SocialButton link="#" bgColor="instagram">
              <Icons.Instagram className="w-5 h-5" />
            </SocialButton>
            <SocialButton link="#" bgColor="twitter">
              <Icons.Twitter className="w-5 h-5" />
            </SocialButton>
            <SocialButton
              link="https://www.linkedin.com/in/rakib-siddiki/"
              bgColor="linkedin"
            >
              <Icons.Linkedin className="w-5 h-5" />
            </SocialButton>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={` sm:hidden lg:block relative  rounded-lg overflow-hidden bg-gradient-to-bl from-yellow-50 to-indigo-100`}
      >
        <Image
          width={500}
          height={1000}
          src={profile}
          placeholder="blur"
          alt="profile"
          className="object-cover object-center size-full "
        />
      </motion.div>
    </section>
  );
};

export default About;
