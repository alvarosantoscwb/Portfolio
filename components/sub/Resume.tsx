"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { RxGithubLogo, RxLinkedinLogo, RxDownload, RxArrowRight } from "react-icons/rx";
import Image from "next/image";

const Resume = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          className="rounded-[50%] shadow-2xl shadow-[#8b5cf6]/20 hover:scale-105 transition-transform duration-300"
          priority
        />
        <div className="flex gap-5"></div>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/alvarosantoscwb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b5cf6] transition-colors duration-300 hover:scale-110 transform"
          >
            <RxLinkedinLogo size={30} />
          </a>
          <a href="https://github.com/alvarosantoscwb" target="_blank" rel="noopener noreferrer" className="hover:text-[#8b5cf6] transition-colors duration-300 hover:scale-110 transform">
            <RxGithubLogo size={30} />
          </a>
        </div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-bold text-gradient max-w-[600px] w-auto h-auto"
        >
          <span>Alvaro Santos</span>
          <span className="text-2xl text-gray-400">Desenvolvedor Full Stack</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Esta página reúne minhas principais habilidades como desenvolvedor full stack. Desde 2022, trabalho no desenvolvimento de aplicações modernas, utilizando tecnologias atuais para criar soluções eficientes, escaláveis e com foco em performance e experiência do usuário. Abaixo você pode conferir alguns dos projetos que demonstram minha experiência na prática.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4 mt-4"
        >
          <motion.button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-semibold rounded-full shadow-lg hover:shadow-[#8b5cf6]/30 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
            <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
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
          className="hover:scale-105 transition-transform duration-300"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default Resume;
