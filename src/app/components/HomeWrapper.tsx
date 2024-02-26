"use client";
import React, { useEffect } from "react";
import { CARD_DITAILS } from "../Db/Card";
import { About, Card } from ".";
import { motion } from "framer-motion";
import { container } from "../utils/motion";

const HomeWrapper = () => {
  useEffect(() => {
    const myComponent = document.getElementById("projects");
    if (myComponent) {
      myComponent.style.scrollMarginTop = "100px";
    }
  }, []);
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:max-w-screen-lg mx-auto">
        <About />
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          id="projects"
          className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-x-6  gap-y-16 mb-20 "
        >
          {(CARD_DITAILS ?? []).map(({ id, ...data }) => (
            <Card key={id} {...data}></Card>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default HomeWrapper;
