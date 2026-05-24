"use client";

import React from "react";
import { slideInFromTop } from "@/utils/motion";
import { RxGithubLogo, RxLinkedinLogo, RxEnvelopeClosed, RxMobile } from "react-icons/rx";

const Contact = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center min-h-screen" id="contact">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
        <div
          className="text-[30px] text-gradient font-medium text-center mb-[15px] mt-[15px]"
        >
          Entre em Contato
        </div>

        <p className="text-gray-400 text-center mb-10 max-w-[600px]">
          Estou disponível para novos projetos e oportunidades. Entre em contato para discutirmos como posso contribuir com seus projetos!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
          <a
            href="mailto:alvarojuniorctb@hotmail.com"
            className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-6 rounded-xl hover:border-[#8b5cf6] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/20 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#8b5cf6]/20 rounded-lg group-hover:bg-[#8b5cf6]/30 transition-colors">
                <RxEnvelopeClosed size={24} className="text-[#a78bfa]" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-400 text-sm">alvarojuniorctb@hotmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-6 rounded-xl hover:border-[#8b5cf6] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/20 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#8b5cf6]/20 rounded-lg group-hover:bg-[#8b5cf6]/30 transition-colors">
                <RxMobile size={24} className="text-[#a78bfa]" />
              </div>
              <div>
                <h3 className="font-semibold text-white">WhatsApp</h3>
                <p className="text-gray-400 text-sm">+55 41 99999-9999</p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/alvarosantoscwb/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl hover:border-[#8b5cf6] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/20 hover:-translate-y-1"
          >
            <RxLinkedinLogo size={28} />
          </a>
          <a
            href="https://github.com/alvarosantoscwb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl hover:border-[#8b5cf6] transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/20 hover:-translate-y-1"
          >
            <RxGithubLogo size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;