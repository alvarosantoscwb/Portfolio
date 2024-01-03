import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Comunidade</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">alvarosantoscwb</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Redes Sociais</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">alvarosantoscwb</span>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Sobre</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">alvarojuniorctb@hotmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mt-[20px] text-[15px] text-center">
                &copy; Alvaro Santos 2024.
            </div>
        </div>
    </div>
  )
}

export default Footer