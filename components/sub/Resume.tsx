"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import Image from "next/image";

const Resume = () => {
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
          priority
        />
        <div className="flex gap-5"></div>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/alvarosantoscwb/"
            target="_blank"
          >
            <RxLinkedinLogo size={30} />
          </a>
          <a href="https://github.com/alvarosantoscwb" target="_blank">
            <RxGithubLogo size={30} />
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
          className="text-md text-gray-400 my-5 max-w-[600px]"
        >
          Esta página é dedicada a demonstrar um pouco das minhas habilidades
          como programador frontend. Com dois anos de experiência na área,
          compartilho com você o meu portfólio de projetos.
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

export default Resume;
