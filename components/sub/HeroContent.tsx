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
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <Image
            src="/foto-perfil.jpeg"
            alt="perfil"
            width={250}
            height={250}
            className="rounded-[50%]"
          />
          <div className="flex gap-5">
          
        </div>
        <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/alvarosantoscwb/" target="_blank">
        <Image className="cursor-pointer" src="/linkedin.svg" alt="work icons" height={30} width={30} />
        </a>
        <a href="https://github.com/alvarosantoscwb" target="_blank">
          <Image className="cursor-pointer" src="/gitwhite.png" alt="work icons" height={30} width={30} />
        </a>
        </div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
