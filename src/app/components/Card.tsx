"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardSettings";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icons } from "@/core";
import { item } from "../utils/motion";
interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  live: {
    label: string;
    url: string;
  };
  gradiant: string;
}

export default function Card({
  imageUrl,
  title,
  description,
  live,
  gradiant,
}: IProps) {
  return (
    <motion.div variants={item}>
      <CardContainer className="inter-var">
        <CardBody
          className={`${gradiant} relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 w-auto sm:w-[30rem] h-auto rounded-xl p-6`}
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-gray-700 dark:text-neutral-700"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-gray-700 text-sm max-w-sm mt-2 dark:text-neutral-700"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageUrl}
              height={1000}
              width={1000}
              className="h-64 w-full object-fit object-center rounded-md  group-hover/card:shadow-xl "
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs pointer-events-none font-normal dark:text-gray-900"
            >
              live view →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-8 py-2 rounded bg-black dark:bg-white dark:text-black text-white text-xs font-bold dark:shadow-sm"
            >
              <Link href={live.url} target="_blank" className="text-sm">
                {live.label}
                <Icons.Link className="inline-flex w-3.5 h-3.5 ml-1" />
              </Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
