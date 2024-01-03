"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div className="border rounded-[50%] border-cyan-200">
        <Image src="/foto-perfil.jpeg" alt="perfil" width={200} height={200} />
      </motion.div>
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#f81a1a61] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#f81a1a61] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Front end Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>Alvaro Santos</span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Sou um desenvolvedor front end com 2 anos de experiência, de uma
          olhada nos meus projetos e habilidades.
        </motion.p>
        <div className="flex gap-5">
          <Image src="/linkedin.svg" alt="work icons" height={60} width={60} />
          <Image src="/linkedin.svg" alt="work icons" height={60} width={60} />
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
