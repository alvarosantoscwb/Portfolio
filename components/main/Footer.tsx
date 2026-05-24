"use client";

import React from "react";
import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed,
    RxMobile,
} from "react-icons/rx";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full h-full bg-gradient-to-t from-gray-900/50 to-transparent text-gray-200 p-[15px] mt-20">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Comunidade</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#8b5cf6] transition-colors duration-300">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">alvarosantoscwb</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Redes Sociais</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#8b5cf6] transition-colors duration-300">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">alvarosantoscwb</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contato</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#8b5cf6] transition-colors duration-300">
                            <RxEnvelopeClosed />
                            <span className="text-[15px] ml-[6px]">alvarojuniorctb@hotmail.com</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#8b5cf6] transition-colors duration-300">
                            <RxMobile />
                            <span className="text-[15px] ml-[6px]">+55 41 99741-4445</span>
                        </p>
                    </div>
                </div>

                <div className="mt-[20px] text-[15px] text-center">
                    &copy; Alvaro Santos {currentYear}.
                </div>
            </div>
        </div>
    )
}

export default Footer