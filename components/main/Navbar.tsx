import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#f81a1a61] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-center m-auto px-[10px]">
        <div className="w-[500px] h-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#f6171761] p-3 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Sobre
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Experiências
            </a>
            <a href="#projects" className="cursor-pointer">
              Projetos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
