"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Experience = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center min-h-screen" id="experience" >
      <div className="flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className='text-[30px] text-white font-medium text-center mb-[15px] mt-[15px]'
        >
            Minhas experiências
        </motion.div>
        
        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#f81a1a61]">
        Preambulo Tech - 2023/2023
        </div>
        <div className="mx-[50px] text-center">
        <div className="mb-2">
        Desenvolvedor Pleno - mar de 2023 / nov de 2023
        </div>
        <br />
        Desenvolvi componentes reutilizáveis utilizando Vue 3, incluindo a migração e aprimoramento de componentes legados do Vue 2 para Vue 3.
        <br />
        Implementei novo visual no produto acompanhando o projeto do UI/UX pelo figma.
        <br />
        Implementação do modo dark mode e light mode no sistema inteiro.
        <br />
        Correções em gráficos do AmCharts.
        <br />
        Correções de bugs da fila de DevOps.
        <br />
      </div>
      <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#f81a1a61] text-center">
        Preambulo Tech - 2022/2023
        </div>
      <div className="mx-[50px] text-center ">
        Desenvolvedor Junior - mar de 2022 / mar de 2023
        </div>
        <div className="mx-[50px] text-center">
        <br />
        Desenvolvi pequenos projetos para me desenvolver utilizando Vue.js e o framework Quasar.
        <br />
        Pair programming junto com o Sênior para entender a estrutura do código, regras de negócio e alguns videos sobre a empresa.
        <br />
        Correção de bugs em dois projetos distintos utilizando a fila do DevOps.
        <br />
        Correções no back-end utilizando Node.js com Express e PostgreSQL
        <br />
        Implementei uma ferramenta de editor de texto tanto no back-end como no front.
        <br />
        Implementei testes unitários com Jest.
        <br />
        Implementei testes end-to-end com cypress e playwright.
        <br />
        </div>
        </div>
    </div>
  );
};

export default Experience;
